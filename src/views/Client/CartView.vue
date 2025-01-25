<template>
  <div class="min-h-screen bg-gray-300">
    <div class="h-full md:grid md:grid-cols-3 gap-2 bg-white">
      <!-- Carrito de Compras -->
      <div class="h-screen col-span-2 p-5 overflow-auto">
        <h1 class="text-xl font-medium">Shopping Cart</h1>
        <div
          v-for="item in store.cart"
          :key="item.id"
          class="item-cart grid grid-cols-3 md:grid-cols-6 gap-4 items-center mt-6 pt-6 border-b"
        >
          <!-- Imagen y detalles del producto -->
          <div
            class="order-1 md:order-1 flex items-center col-span-2 md:col-span-2"
          >
            <img :src="item.image" class="w-16 h-16 rounded-full" />
            <div class="flex flex-col ml-3">
              <span id="test-name" class="md:text-md font-medium">{{ item.name }}</span>
              <span class="text-xs font-light text-gray-400">{{
                item.category.name
              }}</span>
            </div>
          </div>

          <!-- Controles de cantidad -->
          <div
            class="order-3 md:order-2 flex justify-center items-center col-span-1 md:col-span-1"
          >
            <button
              @click="decreaseQuantity(item.id)"
              id="test-restar"
              class="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-l cursor-pointer"
            >
              -
            </button>
            <input
              type="text"
              readonly
              class="focus:outline-none bg-gray-100 border h-8 w-8 text-center text-sm mx-1"
              :value="item.quantity"
            />
            <button
              @click="increaseQuantity(item.id)"
              id="test-aumentar"
              class="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded-r cursor-pointer"
            >
              +
            </button>
          </div>

          <!-- Precio del producto -->
          <div class="order-2 md:order-3 text-center col-span-1 md:col-span-1">
            <span id="test-price" class="text-sm font-medium"
              >${{ (item.pricing * item.quantity).toFixed(2) }}</span
            >
          </div>

          <!-- Botón de eliminar -->
          <div class="order-4 md:order-4 text-right col-span-2 md:col-span-1">
            <button
              id="test-cart-delete"
              @click="removeFromCart(item.id)"
              class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-3 rounded cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Resumen de Pedido -->
      <div
        id="summary"
        class="w-full h-screen px-8 py-1 bg-gray-100 rounded-r-lg relative"
      >
        <h1 class="font-semibold text-2xl border-b py-4">Resumen de compra</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items </span>
          <span  id="test-quantity" class="font-semibold text-sm">{{ store.cartItemCount }}</span>
        </div>
        <!-- Formulario de datos del cliente -->
        <form @submit.prevent="submitOrder" class="space-y-4">
          <div class="py-3">
            <label
              for="name"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >Nombre</label
            >
            <input
              v-model="formData.name"
              type="text"
              id="name"
              placeholder="Tu nombre"
              class="p-2 text-sm w-full border rounded"
              :class="{ 'border-red-500': formErrors.name }"
              required
            />
            <p v-if="formErrors.name" class="text-red-500 text-xs mt-1">
              Nombre es requerido
            </p>
          </div>
          <div class="py-3">
            <label
              for="phone"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >Teléfono</label
            >
            <input
              v-model="formData.phone"
              type="tel"
              id="phone"
              placeholder="Tu teléfono"
              class="p-2 text-sm w-full border rounded"
              :class="{ 'border-red-500': formErrors.phone }"
              required
            />
            <p v-if="formErrors.phone" class="text-red-500 text-xs mt-1">
              Teléfono es requerido
            </p>
          </div>
          <div class="py-3">
            <label
              for="address"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >Dirección</label
            >
            <input
              v-model="formData.address"
              type="text"
              id="address"
              placeholder="Tu dirección"
              class="p-2 text-sm w-full border rounded"
              :class="{ 'border-red-500': formErrors.address }"
              required
            />
            <p v-if="formErrors.address" class="text-red-500 text-xs mt-1">
              Dirección es requerida
            </p>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase"
              >Método de pago</label
            >
            <select
              v-model="formData.paymentMethod"
              class="block p-2 text-gray-600 w-full text-sm"
            >
              <option value="Tranferencia">Tranferencia</option>
              <option value="contra entrega">Pago contra entrega</option>
            </select>
          </div>
          <div class="border-t mt-8">
            <div
              class="flex font-semibold justify-between py-6 text-sm uppercase"
            >
              <span>Total</span>
              <span id="test-total">${{ store.cartTotal }}</span>
            </div>
            <button
              type="submit"
              :disabled="loading"
              class="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full rounded"
            >
              <span v-if="loading">Procesando...</span>
              <span v-else>Hacer pedido</span>
            </button>
          </div>
        </form>
        <!-- Mensaje de éxito -->
        <div
          v-if="successMessage"
          class="absolute top-10 right-10 mt-4 p-2 text-green-800 bg-green-100 border border-green-200 rounded"
        >
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useCart } from "@/Composables/useAddToCart";
import { useCartStore } from "@/stores/cart";
import OrderService from "@/Services/OrderService.js";


const store = useCartStore();

const {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = useCart();

const loading = ref(false);
const successMessage = ref("");

const formData = reactive({
  name: "",
  phone: "",
  address: "",
  paymentMethod: "Tranferencia",
});

const formErrors = reactive({
  name: false,
  phone: false,
  address: false,
});

const validateForm = () => {
  formErrors.name = !formData.name;
  formErrors.phone = !formData.phone;
  formErrors.address = !formData.address;
  return !formErrors.name && !formErrors.phone && !formErrors.address;
};

const submitOrder = async () => {
  if (validateForm()) {
    loading.value = true;
    successMessage.value = "";
    try {
      let products = [];
      store.cart.forEach((product) => {
        products.push(product.id);
      });

      let data = {
        total: store.cartTotal,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        paymentMethod: formData.paymentMethod,
        products: products
      };
      
      const response = await OrderService.addOrder(data);
      console.log(response);
      let url = formaterPedido(response)
      successMessage.value = "¡Pedido realizado con éxito!";
      window.open(url, '_blank');
      // Limpiar el carrito y formulario después de enviar
      clearCart();
      Object.keys(formData).forEach((key) => {
        formData[key] = "";
      });
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
    } finally {
      loading.value = false;
    }
  }
};

const formaterPedido = (pedido)=>{
  const phoneStore= import.meta.env.VITE_PHONE_STORE
  const phone = pedido.phone;
  const name = pedido.name;
  const address = pedido.address;
  const paymentMethod = pedido.paymentMethod;
  const total = pedido.total;
  const orderCode = pedido.code;
  const date = new Date().toLocaleDateString('es-CO');  // Suponiendo que la fecha es la actual
  
  // Formatear los productos
  const productsText = pedido.products.map(product => `- ${product.name} x 1`).join('\n');

  const message = encodeURIComponent(`
    👞 *Shoes-ya* 👞

    Pedido: *${orderCode}*
    Fecha: *${date}*

    *Productos:*
    ${productsText}

    Medio de pago: *${paymentMethod}*
    Cliente: *${name}*
    Teléfono: *${phone}*
    Dirección: *${address}*

    Total: *$${total.toLocaleString()}* más Domicilio
  `);
  
  const url = `https://api.whatsapp.com/send/?phone=57${phoneStore}&text=${message}`;
  
  return url;
}
</script>
