<template>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="product.image">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.category }}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.product }}</h1>
        <p class="leading-relaxed">{{ product.description }}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          <div class="flex ml-6 items-center">
            <span class="mr-3">Talla</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                <option>35</option>
                <option>36</option>
                <option>40</option>
                <option>42</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${{ product.price }}</span>
          <button @click="addToCart(product)" class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCart } from '@/Composables/useAddToCart';
import ProductServices from '@/Services/ProductServices';

const router= useRoute();
const service= new ProductServices();
const id= ref(0)
const product= ref({})
const { addToCart}= useCart();

const getProduct=async ()=>{
  try {
    const response= await service.getById(id.value);
    product.value= response.data
  } catch (error) {
    console.log(error);
    
  }
}

onMounted(()=>{
  id.value= router.params.id;
  getProduct()
})

</script>