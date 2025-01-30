<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-md">
      <h1 class="text-2xl font-bold mb-4">Gestión de Contactos</h1>
      <table class="w-full border-collapse border border-gray-300 text-sm">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Mensaje</th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Correo Electrónico
            </th>
            <th class="border border-gray-300 px-4 py-2 text-left">Fecha</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Acción</th>
          </tr>
        </thead>
        <tbody v-if="usuario.length > 0">
          <tr
            v-for="(contacto, index) in usuario"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border border-gray-300 px-4 py-2">
              {{ contacto.name }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <p>{{ truncateMessage(contacto.message) }}</p>
            </td>

            <td class="border border-gray-300 px-4 py-2">
              {{ contacto.mail }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <p>{{ formatDate(contacto.createdAt) }}</p>
            </td>

            <td class="border border-gray-300 px-4 py-2 text-center">
              <button
                class="text-green-700 hover:underline mr-2"
                @click="contacto.show = true"
              >
                Ver Más
              </button>
              <ContactosMensaje
                :visible="contacto.show"
                :user="contacto"
                @close="contacto.show = false "
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ContactosMensaje from "./Modales/ContactosMensaje.vue";
import ContactServices from "@/Services/ContactServices";

const usuario = ref([]);

const truncateMessage = (message) => {
  if (!message) return "";
  return message.length > 50 ? message.slice(0, 50) + "..." : message;
};

const formatDate = (date) => {
  if (!date) return "";
  return date.slice(0, 10);
};

const getContact = async () => {
  try {
    const response = await ContactServices.getAll();
    console.log(response);
    usuario.value = response;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getContact();
});
</script>
