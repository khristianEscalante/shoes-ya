<template>
    <div>
        <section class="text-gray-600 body-font px-5 md:px-10 bg-gray-50">
            <div class="container px-3 py-4 md:px-10 md:py-20 mx-auto">
                <h2 class="title-font sm:text-4xl text-3xl mb-10 font-medium text-black">Nuestros productos</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div v-for="product in listProducts" :key="product.id"
                        class=" p-4 w-full shadow-md rounded-md">
                        <router-link :to="'detalle/'+product.id" class="block relative h-48 rounded overflow-hidden cursor-pointer">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                :src="product.image">
                        </router-link>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.category }}
                            </h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium cursor-pointer">{{ product.product }}</h2>
                            <p class="mt-1">${{ product.price }}</p>
                            <button @click="addCart(product)"
                                class="bg-green-700  font-semibold hover:bg-green-800  py-3 text-sm text-white uppercase w-full rounded-lg my-2">Agregar
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
import { onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const service = new ProductServices();
const listProducts = ref([]);
const store= useCartStore();

const addCart=(product)=>{
    store.addToCart(product);
}

const getAll = async () => {
    try {
        const response = await service.getAll();
        console.log(response);

        listProducts.value = response;
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    getAll()
});
</script>