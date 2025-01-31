<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Overlay con efecto de desenfoque -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
        <!-- Header del Modal -->
        <div class="bg-gray-600 px-6 py-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-white">Información del Mensaje</h2>
            <button
              @click="$emit('close')"
              class="rounded-full p-1 hover:bg-blue-700 transition-colors duration-200"
            >
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Contenido del Modal -->
        <div class="bg-white px-6 py-4">
          <!-- Información del Remitente -->
          <div class="mb-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ user.name }}</h3>
                <p class="text-sm text-gray-500">{{ user.mail }}</p>
              </div>
            </div>
          </div>

          <!-- Fecha del Mensaje -->
          <div class="mb-4">
            <div class="flex items-center text-sm text-gray-500">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ formatDate(user.createdAt) }}
            </div>
          </div>

          <!-- Contenido del Mensaje -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
            <div class="bg-gray-50 rounded-lg p-4 text-gray-700">
              {{ user.message }}
            </div>
          </div>
        </div>

        <!-- Footer del Modal -->
        <div class="bg-gray-50 px-6 py-4 flex justify-end">
          <button
            @click="$emit('close')"
            class="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const formatDate = (date) => {
  if (!date) return "";
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(date).toLocaleDateString('es-ES', options);
};

defineProps({
  visible: Boolean,
  user: {
    type: Object,
    required: true,
    default: () => ({
      name: "",
      mail: "",
      createdAt: "",
      message: "",
    }),
  },
});
</script>
  