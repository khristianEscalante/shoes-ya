<template>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" id="image" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="product.image">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.category }}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>
        <p id="description" class="leading-relaxed">{{ product.description }}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          
        </div>
        <div class="flex flex-col items-start">
          <span id="price" class="font-medium text-2xl text-gray-900">${{ product.pricing }}</span>
          <button @click="addToCart(product)" class="flex my-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCart } from '@/Composables/useAddToCart';
import ProductServices from '@/Services/ProductServices';

const router= useRoute();
const service= new ProductServices();
const id= ref(0)
const product = reactive({
  name:'',
  image:'',
  category:'',
  description:'',
  pricing:0
})
const { addToCart}= useCart();

const getProduct= async()=>{
  try {
    const response= await service.getById(id.value);
    product.name = response.name
    product.category = response.category.name
    product.description = response.description
    product.pricing= response.pricing
    product.image= response.image
  } catch (error) {
    console.log(error);
  }
}

onMounted(()=>{
  id.value= router.params.id;
  getProduct()
})

</script>