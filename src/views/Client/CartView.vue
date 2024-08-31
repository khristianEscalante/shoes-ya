<template>
    <div class="min-h-screen bg-gray-300">
        <div class="h-full md:grid md:grid-cols-3 gap-2 bg-white">
            <!-- Carrito de Compras -->
            <div class="h-screen col-span-2 p-5 overflow-auto">
                <h1 class="text-xl font-medium">Shopping Cart</h1>
                <div v-for="item in store.cart" :key="item.id" class="grid grid-cols-3 md:grid-cols-6 gap-4 items-center mt-6 pt-6 border-b">
        <!-- Imagen y detalles del producto -->
        <div class="order-1 md:order-1 flex items-center col-span-2 md:col-span-2">
            <img :src="item.image" class="w-16 h-16 rounded-full">
            <div class="flex flex-col ml-3">
                <span class="md:text-md font-medium">{{ item.product }}</span>
                <span class="text-xs font-light text-gray-400">{{ item.category }}</span>
            </div>
        </div>

        <!-- Controles de cantidad -->
        <div class="order-3 md:order-2 flex justify-center items-center col-span-1 md:col-span-1">
            <button @click="decreaseQuantity(item.id)"
                class="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-l cursor-pointer">
                -
            </button>
            <input type="text" readonly
                class="focus:outline-none bg-gray-100 border h-8 w-8 text-center text-sm mx-1"
                :value="item.quantity">
            <button @click="increaseQuantity(item.id)"
                class="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded-r cursor-pointer">
                +
            </button>
        </div>

        <!-- Precio del producto -->
        <div class="order-2 md:order-3 text-center col-span-1 md:col-span-1">
            <span class="text-sm font-medium">${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>

        <!-- Botón de eliminar -->
        <div class="order-4 md:order-4 text-right col-span-2 md:col-span-1">
            <button @click="removeFromCart(item.id)"
                class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-3 rounded cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
            </div>
            <!-- Resumen de Pedido -->
            <div id="summary" class="w-full h-screen px-8 py-1 bg-gray-100 rounded-r-lg">
                <h1 class="font-semibold text-2xl border-b py-4">Resumen de compra</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items </span>
                    <span class="font-semibold text-sm">{{ store.cartItemCount }}</span>
                </div>
                <div class="py-3">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Nombre</label>
                    <input type="text" id="promo" placeholder="Tu Dirección"
                        class="p-2 text-sm w-full border rounded" />
                </div>
                <div class="py-3">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Telefono</label>
                    <input type="text" id="promo" placeholder="Tu Dirección"
                        class="p-2 text-sm w-full border rounded" />
                </div>
                <div class="py-3">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Dirección</label>
                    <input type="text" id="promo" placeholder="Tu Dirección"
                        class="p-2 text-sm w-full border rounded" />
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Metodo de pago</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>${{ store.cartTotal }}</span>
                    </div>
                    <button
                        class="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full rounded">Hacer
                        pedido</button>
                    <button
                        class="bg-gray-500 font-semibold hover:bg-gray-600 my-2 py-3 text-sm text-white uppercase w-full rounded">Continuar
                        comprando</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCart } from '@/Composables/useAddToCart';
import { useCartStore } from '@/stores/cart';

const store = useCartStore();

const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = useCart();
</script>
