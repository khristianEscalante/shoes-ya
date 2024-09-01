<template>
    <div>
        <section class="text-gray-600 body-font px-5 md:px-10 bg-gray-50">
            <div class="container px-3 py-4 md:px-10 md:py-10 mx-auto">
                <h2 class="title-font sm:text-4xl text-3xl mb-10 font-bold text-black">Nuestros productos</h2>
                <!-- Categorías -->
                <div class="mb-10 flex flex-wrap gap-4">
                    <button @click="filterByCategory(null)" class="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-green-700">
                        Todos
                    </button>
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        @click="filterByCategory(category.category)"
                        class="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-green-700">
                        {{ category.category }}
                    </button>
                </div>

                <!-- Lista de Productos -->
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div v-for="product in filteredProducts" :key="product.id"
                        class="p-4 w-full shadow-md rounded-md">
                        <router-link :to="'detalle/'+product.id" class="block relative h-48 rounded overflow-hidden cursor-pointer">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                :src="product.image">
                        </router-link>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.category }}</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium cursor-pointer">{{ product.product }}</h2>
                            <p class="mt-1">${{ product.price }}</p>
                            <button @click="addCart(product)"
                                class="bg-green-700 font-semibold hover:bg-green-800 py-3 text-sm text-white uppercase w-full rounded-lg my-2">Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import ProductServices from '@/Services/ProductServices';
import CategoriesServices from '@/Services/CategoriesService';
import { onMounted, ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const service = new ProductServices();
const serviceCategory = new CategoriesServices();
const listProducts = ref([]);
const categories = ref([]);
const selectedCategory = ref(null);
const store = useCartStore();

const addCart = (product) => {
    store.addToCart(product);
};

const getCategories= async()=>{
    try {
        const response= await serviceCategory.getAll();
        categories.value= response;
    } catch (error) {
        console.error(error);    
    }
}

const getAll = async () => {
    try {
        const response = await service.getAll();
        console.log(response);

        listProducts.value = response;

    } catch (error) {
        console.error(error);
    }
};

const filterByCategory = (category) => {
    selectedCategory.value = category;
};

const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
        return listProducts.value;
    }
    return listProducts.value.filter(product => product.category === selectedCategory.value);
});

onMounted(() => {
    getAll();
    getCategories();
});
</script>
