<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-md">
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold mb-4">Gestión de Productos</h1>
        <button
          @click="abrirModal"
          class="text-white bg-green-700 border-0 mb-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"
        >
          Agregar Productos
        </button>

        <ModalProducto :visible="isModalVisible" @close="cerrarModal" />
      </div>

      <table class="w-full border-collapse border border-gray-300 text-sm">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Descripción
            </th>
            <th class="border border-gray-300 px-4 py-2 text-right">Precio</th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Categoría
            </th>
            <th class="border border-gray-300 px-4 py-2 text-left">Imagen</th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(producto, index) in productos"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border border-gray-300 px-4 py-2">
              {{ producto.nombre }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ producto.descripcion }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-right">
              ${{ producto.precio }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ producto.categoria }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ producto.imagen }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button
                class="text-green-700 hover:underline mr-2"
                @click="editarProducto(index)"
              >
                Editar
              </button>
              <button
                class="text-red-500 hover:underline"
                @click="eliminarProducto(index)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import ModalProducto from "./Modales/ModalProducto.vue";
const productos = ref([
  {
    nombre: "Producto 1",
    categoria: "Categoría A",
    precio: 100,
    descripcion: "Descripción del producto 1",
    imagen: "imagen",
  },
  {
    nombre: "Producto 2",
    categoria: "Categoría B",
    precio: 200,
    descripcion: "Descripción del producto 2",
    imagen: "imagen",
  },
]);

const isModalVisible = ref(false);

const abrirModal = () => {
  isModalVisible.value = true;
};

const cerrarModal = () => {
  isModalVisible.value = false;
};

const editarProducto = (index) => {
  alert(`Editar producto en la posición ${index}`);
};

const eliminarProducto = (index) => {
  alert(`Eliminar producto en la posición ${index}`);
  productos.value.splice(index, 1);
};
</script>

  
  <style>
body {
  font-family: "Inter", sans-serif;
}
</style>
  