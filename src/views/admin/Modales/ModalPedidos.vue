<template>
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <!-- Header -->
        <h2 class="text-xl font-bold mb-4">Información del Pedido</h2>
  
        <!-- Detalles del Usuario -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="font-medium text-gray-700">Codigo</label>
            <p class="text-gray-800">{{ pedido.codigo }}</p>
          </div>
          <div>
            <label class="font-medium text-gray-700">Total</label>
            <p class="text-gray-800">{{ pedido.total }}</p>
          </div>
          <div>
            <label class="font-medium text-gray-700">Fecha</label>
            <p class="text-gray-800">{{ formatDate(pedido.createdAt) }}</p>
          </div>
        </div>
        <!-- Mensaje -->
        <div class="mb-6">
          <label class="font-medium text-gray-700 block mb-2">Productos</label>
          <p
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="6"
            readonly
          >
            {{ pedido.message }}
          </p>
        </div>
        <!-- Botones -->
        <div class="flex justify-end space-x-4">
          <button
            @click="$emit('close')"
            class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </template>
    
    <script setup>
  const formatDate = (date) => {
    if (!date) return "";
    return date.slice(0, 10);
  };
  defineProps({
    visible: Boolean,
    pedido: {
      type: Object,
      required: true,
      default: () => ({
        codigo: "",
        total: "",
        fecha: "",
        productos: {
            name: "",
            imagen: "",
            descripcion: ""
        },
      }),
    },
  });
  </script>
    