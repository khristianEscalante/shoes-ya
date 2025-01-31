<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Mensajes de Contacto</h1>
        <p class="mt-2 text-gray-600">Gestiona los mensajes recibidos de tus clientes</p>
      </div>

      <!-- Tabla de Mensajes -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cliente</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Correo</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mensaje</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fecha</th>
                <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="contact in contacts" :key="contact.id" class="hover:bg-gray-50">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span class="text-blue-600 font-semibold text-sm">
                        {{ getInitials(contact.name) }}
                      </span>
                    </div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ contact.name }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-600">{{ contact.mail }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-600 truncate max-w-xs">
                    {{ contact.message }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatDate(contact.createdAt) }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center space-x-3">
                    <button
                      @click="showMessage(contact)"
                      class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal de Mensaje -->
      <ContactosMensaje
        v-if="selectedContact"
        :visible="!!selectedContact"
        :user="selectedContact"
        @close="selectedContact = null"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContactServices from "@/Services/ContactServices";
import ContactosMensaje from "./Modales/ContactosMensaje.vue";
import { useToast } from 'vue-toast-notification';

const $toast = useToast();
const contacts = ref([]);
const selectedContact = ref(null);
const service =  ContactServices;

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const showMessage = (contact) => {
  selectedContact.value = contact;
};

const getContacts = async () => {
  try {
    const response = await service.getAll();
    contacts.value = response;
  } catch (error) {
    $toast.error('Error al cargar los mensajes');
    console.error(error);
  }
};

const deleteMessage = async (id) => {
  if (!confirm('¿Estás seguro de eliminar este mensaje?')) return;
  
  try {
    await service.delete(id);
    $toast.success('Mensaje eliminado correctamente');
    await getContacts();
  } catch (error) {
    $toast.error('Error al eliminar el mensaje');
    console.error(error);
  }
};

onMounted(() => {
  getContacts();
});
</script>

<style>
/* Asegúrate de tener instalado @tailwindcss/line-clamp para que funcione line-clamp-3 */
</style>
