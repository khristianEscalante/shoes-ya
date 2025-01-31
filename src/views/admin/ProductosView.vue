<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header con botón de agregar -->
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Productos</h1>
          <p class="mt-2 text-gray-600">Gestiona el catálogo de productos</p>
        </div>
        <button
          @click="openModal()"
          class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nuevo Producto
        </button>
      </div>

      <!-- Grid de Productos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        >
          <!-- Imagen del producto -->
          <div class="aspect-w-16 aspect-h-12 h-52 overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Información del producto -->
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ product.name }}</h3>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                  {{ product.category.name }}
                </span>
              </div>
              <p class="text-lg font-bold text-blue-600">
                {{ formatCurrency(product.pricing) }}
              </p>
            </div>

            <p class="mt-3 text-sm text-gray-500 line-clamp-2">
              {{ product.description }}
            </p>

            <!-- Acciones -->
            <div class="mt-4 flex space-x-3">
              <button
                @click="editProduct(product)"
                class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar
              </button>
              <button
                @click="deleteProduct(product.id)"
                class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal de Producto -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">
              {{ isEditing ? 'Editar Producto' : 'Nuevo Producto' }}
            </h2>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveProduct" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                v-model="productForm.name"
                type="text"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                v-model="productForm.description"
                rows="3"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Precio</label>
              <input
                v-model="productForm.pricing"
                type="number"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Categoría</label>
              <select
                v-model="productForm.category_id"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Imagen</label>
              <input
                type="file"
                @change="handleImageUpload"
                accept="image/*"
                class="mt-1 block w-full"
              />
            </div>

            <div class="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {{ isEditing ? 'Guardar Cambios' : 'Crear Producto' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import ProductService from '@/Services/ProductServices';
import CategoriesServices from '../../Services/CategoriesService';

const $toast = useToast();
const products = ref([]);
const categories = ref([]);
const showModal = ref(false);
const isEditing = ref(false);
const selectedImage = ref(null);

const categoryService = new CategoriesServices();
const productService = new ProductService();

const productForm = reactive({
  id: null,
  name: '',
  description: '',
  pricing: '',
  category_id: '',
  image: ''
});

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);
};

const getProducts = async () => {
  try {
    const response = await productService.getAll();
    products.value = response;
  } catch (error) {
    $toast.error('Error al cargar los productos');
    console.error(error);
  }
};

const getCategories = async () => {
  try {
    const response = await categoryService.getAll();
    categories.value = response;
  } catch (error) {
    $toast.error('Error al cargar las categorías');
    console.error(error);
  }
};

const handleImageUpload = (event) => {
  selectedImage.value = event.target.files[0];
};

const openModal = () => {
  isEditing.value = false;
  resetForm();
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  resetForm();
};

const resetForm = () => {
  productForm.id = null;
  productForm.name = '';
  productForm.description = '';
  productForm.pricing = '';
  productForm.category_id = '';
  productForm.image = '';
  selectedImage.value = null;
};

const editProduct = (product) => {
  isEditing.value = true;
  productForm.id = product.id;
  productForm.name = product.name;
  productForm.description = product.description;
  productForm.pricing = product.pricing;
  productForm.category_id = product.category_id;
  productForm.image = product.image;
  showModal.value = true;
};

const saveProduct = async () => {
  try {
    const formData = new FormData();
    formData.append('name', productForm.name);
    formData.append('description', productForm.description);
    formData.append('pricing', productForm.pricing);
    formData.append('category_id', productForm.category_id);
    if (selectedImage.value) {
      formData.append('image', selectedImage.value);
    }

    if (isEditing.value) {
      await productService.update(productForm.id, formData);
      $toast.success('Producto actualizado correctamente');
    } else {
      await productService.create(formData);
      $toast.success('Producto creado correctamente');
    }

    await getProducts();
    closeModal();
  } catch (error) {
    $toast.error('Error al guardar el producto');
    console.error(error);
  }
};

const deleteProduct = async (id) => {
  if (!confirm('¿Estás seguro de eliminar este producto?')) return;

  try {
    await productService.delete(id);
    $toast.success('Producto eliminado correctamente');
    await getProducts();
  } catch (error) {
    $toast.error('Error al eliminar el producto');
    console.error(error);
  }
};

onMounted(() => {
  getProducts();
  getCategories();
});
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
  