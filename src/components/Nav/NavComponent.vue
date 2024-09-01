<template>
  <header class="text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
    <div class="container mx-auto flex items-center justify-between p-5">
      
      <!-- Botón de menú hamburguesa y nombre de la marca -->
      <div class="flex items-center">
        <!-- Botón de menú hamburguesa para pantallas pequeñas -->
        <button @click="toggleMenu" class="md:hidden text-white mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        <!-- Nombre de la marca -->
        <router-link to="/" class="title-font font-medium text-white flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 32 32">
          <path fill="#FFFFFF"
            d="M4.725 6.175q-.091.058-.172.138l-2.91 2.91a2.183 2.183 0 0 0-.018 3.066l.019.02l.09.099l.346.374c.3.323.731.788 1.263 1.354a285 285 0 0 0 4.129 4.308c3.168 3.233 6.973 6.932 9.24 8.456c2.553 1.724 4.873 2.695 6.567 3.236c.848.27 1.538.434 2.025.53a12 12 0 0 0 .728.121l.035.004c.675.107 1.272.126 1.803.015a2.66 2.66 0 0 0 1.377-.739l.7-.7q.078-.078.136-.169a3.05 3.05 0 0 0 1-2.262c-.117-1.293-1.337-2.04-2.417-2.7a4.6 4.6 0 0 1-1.428-1.1l-.795-1.856h.007a1.05 1.05 0 1 0 0-2.1h-.907l-.644-1.504a1.05 1.05 0 0 0-.39-2.026h-.478l-.532-1.241a1.05 1.05 0 0 0-.05-2.099H22.6l-.411-.96c-.062-.15-.1-.258-.132-.35a2.54 2.54 0 0 0-.72-1.137l-.52-.521a2.15 2.15 0 0 0-.847-.502v-.45c-.625-1.885-2.905-2.542-4.434-1.395l-2.128-2.17a2.063 2.063 0 0 0-.021-2.925a3.113 3.113 0 0 0-4.395 0zm9.462 9.18l.003-.745c0-1.7-.66-3.32-1.84-4.53L8.04 5.684l2.365-2.368a1.058 1.058 0 0 1 1.587.1a2.056 2.056 0 0 0 0 2.9l4.43 4.442a2.147 2.147 0 0 0 2.98 0l.52.52a.7.7 0 0 1 .245.379l.003.01c.043.124.096.274.18.469l.074.174h-.944c-.58 0-1.05.47-1.05 1.05a1.06 1.06 0 0 0 1.05 1.05h1.844l.531 1.24h-.785c-.58 0-1.05.47-1.05 1.05a1.06 1.06 0 0 0 1.05 1.05h1.685l.612 1.43h-.977c-.58 0-1.05.47-1.05 1.05c0 .29.12.55.31.74s.45.3.74.31h1.877l1.133 2.646a5.1 5.1 0 0 0 2.227 2.012l.003.002c.503.307 1.438.877 1.463 1.162c0 .056-.055.227-.305.507a21.6 21.6 0 0 1-4.997-1.242c-2.942-1.132-5.983-3.143-7.118-6.701l-.001-.002c-.405-1.26-1.318-2.727-2.376-4.163zM3.055 10.891a.17.17 0 0 1 0-.215L5.29 8.44q.301.295.7.693a99 99 0 0 1 3.231 3.388c1.208 1.33 2.447 2.785 3.466 4.167c1.034 1.403 1.781 2.652 2.082 3.587a11 11 0 0 0 .148.435l-11.86-9.817z" />
        </svg>
          <span class="text-xl">Shoes-ya</span>
        </router-link>
      </div>
      <nav class="hidden md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto bg-gray-900 p-5 md:p-0">
      <router-link to="/productos" class="mr-5 hover:text-white cursor-pointer">Productos</router-link>
      <router-link to="/contacto" class="mr-5 hover:text-white cursor-pointer">Contacto</router-link>
    </nav>

      <!-- Carrito -->
      <div class="flex items-center">
        <router-link to="/carrito" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <div v-show="store.cartItemCount !== 0" class="size-4 rounded-full bg-green-300 absolute top-0 left-1 text-xs font-semibold flex justify-center items-center text-green-700">
            {{ store.cartItemCount }}
          </div>
        </router-link>
      </div>
    </div>

    <!-- Menú de navegación -->
    <nav :class="{'hidden': !menuOpen, 'flex': menuOpen}" class="md:hidden flex-col md:flex-row items-center text-base justify-center w-full md:w-auto bg-gray-900 p-5 md:p-0">
      <router-link to="/" @click="toggleMenu" class="mr-5 hover:text-white cursor-pointer">Inicio</router-link>
      <router-link to="/productos" @click="toggleMenu" class="mr-5 hover:text-white cursor-pointer">Productos</router-link>
      <router-link to="/contacto" @click="toggleMenu" class="mr-5 hover:text-white cursor-pointer">Contacto</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const store = useCartStore();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Puedes añadir estilos específicos para ajustar el comportamiento del menú si es necesario */
</style>
