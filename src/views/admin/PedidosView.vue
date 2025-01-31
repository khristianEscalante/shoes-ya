<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Gestión de Pedidos</h1>
        <p class="text-gray-600">Administra y visualiza todos los pedidos</p>
      </div>

      <!-- Tabla de Pedidos -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Código</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cliente</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Método de Pago</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fecha</th>
                <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="pedido in pedidos" :key="pedido.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ pedido.code }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900 font-medium">{{ pedido.name }}</div>
                  <div class="text-sm text-gray-500">{{ pedido.phone }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ formatCurrency(pedido.total) }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span 
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="{
                      'bg-green-100 text-green-800': pedido.paymentMethod === 'Tranferencia',
                      'bg-yellow-100 text-yellow-800': pedido.paymentMethod === 'Efectivo'
                    }"
                  >
                    {{ pedido.paymentMethod }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatDate(pedido.createdAt) }}</div>
                  <div class="text-xs text-gray-500">{{ formatTime(pedido.createdAt) }}</div>
                </td>
                <td class="px-6 py-4 text-center">
                  <button
                    @click="showOrderDetails(pedido)"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver Detalles
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal de Detalles (opcional) -->
    <div v-if="selectedOrder" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-gray-900">Detalles del Pedido</h2>
          <button @click="selectedOrder = null" class="text-gray-400 hover:text-gray-500">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm font-medium text-gray-500">Código de Pedido</p>
              <p class="mt-1 text-sm text-gray-900">{{ selectedOrder.code }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Total</p>
              <p class="mt-1 text-sm text-gray-900">{{ formatCurrency(selectedOrder.total) }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Cliente</p>
              <p class="mt-1 text-sm text-gray-900">{{ selectedOrder.name }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Teléfono</p>
              <p class="mt-1 text-sm text-gray-900">{{ selectedOrder.phone }}</p>
            </div>
            <div class="col-span-2">
              <p class="text-sm font-medium text-gray-500">Dirección</p>
              <p class="mt-1 text-sm text-gray-900">{{ selectedOrder.address }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Método de Pago</p>
              <p class="mt-1 text-sm text-gray-900">{{ selectedOrder.paymentMethod }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Fecha</p>
              <p class="mt-1 text-sm text-gray-900">{{ formatDate(selectedOrder.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import OrderService from "@/Services/OrderService";

const pedidos = ref([]);
const selectedOrder = ref(null);

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatTime = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);
};

const showOrderDetails = (order) => {
  selectedOrder.value = order;
};

const getPedidos = async () => {
  try {
    const response = await OrderService.getAll();
    pedidos.value = response;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getPedidos();
});
</script>
  