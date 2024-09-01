<template>
  <section class="text-gray-600 body-font relative bg-gray-100">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">Contáctanos</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Déjanos un mensaje y nos pondremos en contacto contigo a la brevedad.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <form @submit.prevent="handleSubmit" class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
              <input type="text" id="name" v-model="form.name" @input="clearError('name')" :class="inputClass('name')">
              <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Correo Electrónico</label>
              <input type="email" id="email" v-model="form.email" @input="clearError('email')" :class="inputClass('email')">
              <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" v-model="form.message" @input="clearError('message')" :class="inputClass('message')"></textarea>
              <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
            </div>
          </div>
          <div class="p-2 w-full">
            <button type="submit" class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" :disabled="isSubmitting">
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Enviar</span>
            </button>
          </div>
          <div v-if="successMessage" class="p-2 w-full text-center text-green-500 mt-4">
            {{ successMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Estado inicial del formulario
const form = ref({
  name: '',
  email: '',
  message: ''
});

// Estado para manejar errores y mensajes de éxito
const errors = ref({});
const successMessage = ref('');
const isSubmitting = ref(false);

// Función para validar los campos del formulario
const validateForm = () => {
  errors.value = {};

  if (!form.value.name) {
    errors.value.name = 'El nombre es requerido.';
  }
  if (!form.value.email) {
    errors.value.email = 'El correo electrónico es requerido.';
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'El correo electrónico no es válido.';
  }
  if (!form.value.message) {
    errors.value.message = 'El mensaje es requerido.';
  }

  return Object.keys(errors.value).length === 0;
};

// Función para enviar el formulario
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  successMessage.value = '';

  try {
    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    successMessage.value = '¡Mensaje enviado exitosamente!';
    form.value = { name: '', email: '', message: '' }; // Resetear el formulario
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Función para limpiar errores específicos cuando el usuario empieza a escribir
const clearError = (field) => {
  if (errors.value[field]) {
    delete errors.value[field];
  }
};

// Función para aplicar clases de error en los inputs
const inputClass = (field) => {
  return [
    'w-full bg-white rounded border text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out',
    {
      'border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200': !errors.value[field],
      'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200': errors.value[field]
    }
  ];
};
</script>

<style scoped>
/* Estilos adicionales para mejorar el diseño visual */
textarea {
  min-height: 100px;
}
</style>
