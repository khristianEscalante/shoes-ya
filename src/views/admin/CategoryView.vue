<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Lista de Categorías -->
      <div class="lg:w-3/5">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h1 class="text-3xl font-bold text-gray-800 mb-6">
            <i class="fas fa-tags mr-2"></i>Categorías
          </h1>
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div
              v-for="category in listCategories"
              :key="category.id"
              class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div class="p-5">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ category.name }}
                </h2>
                <p class="text-gray-600 text-sm mb-4 min-h-[60px]">
                  {{ category.description }}
                </p>
                <div class="flex gap-2">
                  <button
                    @click="startEditing(category)"
                    class="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <i class="fas fa-edit mr-2"></i>Editar
                  </button>
                  <button
                    @click="deleteCategory(category.id)"
                    class="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <i class="fas fa-trash mr-2"></i>Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="lg:w-2/5">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-gray-800">
              {{ isEditing ? 'Editar Categoría' : 'Nueva Categoría' }}
            </h1>
            <button 
              v-if="isEditing"
              @click="cancelEditing"
              class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <i class="fas fa-times mr-2"></i>Cancelar
            </button>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                v-model="formData.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                type="text"
                placeholder="Nombre de la categoría"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                v-model="formData.description"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                rows="6"
                placeholder="Describe la categoría"
              ></textarea>
            </div>

            <div class="flex gap-3">
              <button
                v-if="!isEditing"
                @click="create()"
                class="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200 font-medium text-lg flex items-center justify-center"
              >
                <i class="fas fa-plus mr-2"></i>Crear Categoría
              </button>
              <button
                v-else
                @click="updateCategory"
                class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium text-lg flex items-center justify-center"
              >
                <i class="fas fa-save mr-2"></i>Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoriesServices from "@/Services/CategoriesService";
import { onMounted, ref } from "vue";
import { useToast } from 'vue-toast-notification';

const $toast = useToast();
const service = new CategoriesServices();
const listCategories = ref([]);
const isEditing = ref(false);

const formData = ref({
  id: null,
  name: "",
  description: ""
});

const resetForm = () => {
  formData.value = {
    id: null,
    name: "",
    description: ""
  };
  isEditing.value = false;
};

const startEditing = (category) => {
  isEditing.value = true;
  formData.value = { ...category };
};

const cancelEditing = () => {
  resetForm();
};

const getCategories = async () => {
  try {
    const response = await service.getAll();
    listCategories.value = response;
  } catch (error) {
    $toast.error('Error al cargar las categorías');
    console.error(error);
  }
};

const create = async () => {
  try {
    const response = await service.create(formData.value);
    if (response) {
      $toast.success('Categoría creada exitosamente');
      await getCategories();
      resetForm();
    }
  } catch (error) {
    $toast.error('Error al crear la categoría');
    console.error(error);
  }
};

const updateCategory = async () => {
  try {
    const { id, ...updateData } = formData.value;
    const response = await service.update(id, updateData);
    if (response) {
      $toast.success('Categoría actualizada exitosamente');
      await getCategories();
      resetForm();
    }
  } catch (error) {
    $toast.error('Error al actualizar la categoría');
    console.error(error);
  }
};

const deleteCategory = async (id) => {
  try {
    const response = await service.delete(id);
    if (response) {
      $toast.success('Categoría eliminada exitosamente');
      await getCategories();
    }
  } catch (error) {
    $toast.error('Error al eliminar la categoría');
    console.error(error);
  }
};

onMounted(() => {
  getCategories();
});
</script>