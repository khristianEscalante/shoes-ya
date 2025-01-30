<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-md">
      <h1 class="text-2xl font-bold mb-4">Gestión de Pedidos</h1>
      <table class="w-full border-collapse border border-gray-300 text-sm">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Codigo</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Total</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Fecha</th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Productos
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(pedido, index) in pedidos"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border border-gray-300 px-4 py-2">
              {{ pedido.code }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <p>{{ pedido.total }}</p>
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <p>{{ formatDate(pedido.createdAt) }}</p>
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ pedido.products }}
            </td>

            <td class="border border-gray-300 px-4 py-2 text-center">
              <button
                class="text-green-700 hover:underline mr-2"
                @click="pedido.show = true"
              >
                Ver Más
              </button>
              <!-- <ModalPedidos
                  :visible="contacto.show"
                  :user="contacto"
                  @close="contacto.show = false "
                /> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";
import ModalPedidos from "./Modales/ModalPedidos.vue";
import OrderService from "@/Services/OrderService";

const pedidos = ref([]);

const formatDate = (date) => {
  if (!date) return "";
  return date.slice(0, 10);
};

const getPedidos = async () => {
  try {
    const response = await OrderService.getAll();
    console.log(response);
    pedidos.value = response;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getPedidos();
});
</script>
  