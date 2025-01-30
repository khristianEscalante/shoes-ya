<template>
  <!-- Modal Structure -->
  <div
    v-if="visible"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center mt-14 "
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h2 class="text-xl font-semibold mb-4">Agregar Producto</h2>
      <form @submit.prevent="agregarProducto">
        <!-- Nombre -->
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700"
            >Nombre</label
          >
          <input
            type="text"
            id="nombre"
            v-model="form.nombre"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <!-- Descripción -->
        <div class="mb-4">
          <label
            for="descripcion"
            class="block text-sm font-medium text-gray-700"
            >Descripción</label
          >
          <textarea
            id="descripcion"
            v-model="form.descripcion"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <!-- Precio -->
        <div class="mb-4">
          <label for="precio" class="block text-sm font-medium text-gray-700"
            >Precio</label
          >
          <input
            type="number"
            id="precio"
            v-model="form.precio"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <!-- Categoría -->
        <div class="mb-4">
          <label for="categoria" class="block text-sm font-medium text-gray-700"
            >Categoría</label
          >
          <select
            id="categoria"
            v-model="form.categoria"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Seleccione una categoría</option>
            <option
              v-for="categoria in categorias"
              :key="categoria"
              :value="categoria"
            >
              {{ categoria }}
            </option>
          </select>
        </div>

        <!-- Imagen -->
        <div class="mb-4">
          <label for="imagen" class="block text-sm font-medium text-gray-700"
            >Imagen</label
          >
          <input
            type="file"
            id="imagen"
            @change="subirImagen"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <!-- Botones -->
        <div class="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            @click="$emit('close')"
            class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
defineProps({
  visible: Boolean,
});
const form = ref({
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "",
  imagen: null,
});

const categorias = ref(["Electrónica", "Ropa", "Hogar", "Juguetes"]);

const agregarProducto = () => {
  alert("Producto agregado");
  cerrarModal();
};

const cerrarModal = () => {
  form.value = {
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagen: null,
  };
};

const subirImagen = (event) => {
  form.value.imagen = event.target.files[0];
};
</script>

  
  <style>
body {
  font-family: "Inter", sans-serif;
}
</style>
  