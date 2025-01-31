<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <!-- Header con foto de perfil -->
        <div class="relative h-48 bg-gray-200">
          <div class="absolute -bottom-16 left-8">
            <div class="relative">
              <img :src="profile.photo" alt="Foto de perfil"
                class="w-32 h-32 rounded-full border-4 border-white object-cover bg-white" />
            </div>
          </div>
        </div>

        <!-- Contenido del perfil -->
        <div class="pt-20 px-8 pb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Información personal -->
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-800">Información Personal</h2>

              <!-- Nombre -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <p class="text-gray-800 text-lg">{{ profile.name }}</p>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <p class="text-gray-800 text-lg">{{ profile.email }}</p>
              </div>

              <!-- Teléfono -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input v-model="form.phone" type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Ingrese su teléfono" />
              </div>

              <!-- Botón actualizar información -->
              <button @click="updateProfile"
                class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                <span>Actualizar Información</span>
              </button>
            </div>

            <!-- Cambio de contraseña -->
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-800">Cambiar Contraseña</h2>

              <!-- Contraseña actual -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual</label>
                <input v-model="form.currentPassword" type="password"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••" />
              </div>

              <!-- Nueva contraseña -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña</label>
                <input v-model="form.newPassword" type="password"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••" />
              </div>

              <!-- Confirmar contraseña -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                <input v-model="form.confirmPassword" type="password"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••" />
              </div>

              <!-- Botón cambiar contraseña -->
              <button @click="updatePassword"
                class="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Cambiar Contraseña</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import AuthService from '@/Services/AuthService';

const $toast = useToast();

const profile = ref({
  name: '',
  email: '',
  phone: '',
  photo: ''
});

const form = reactive({
  phone: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const updateProfile = async () => {
  try {
    const data = {
      name: profile.value.name,
      email: profile.value.email,
      phone: form.phone,
      password: profile.value.password,
      photo: profile.value.photo
    }
    const response = await AuthService.updateProfile(localStorage.getItem("user"), data);
    $toast.success('Información actualizada correctamente');
    console.log(response);
    
  } catch (error) {
    $toast.error('Error al actualizar la información');
    console.error(error);
  }
};

const updatePassword = async () => {
  if (form.newPassword !== form.confirmPassword) {
    $toast.error('Las contraseñas no coinciden');
    return;
  }

  try {
    const data = {
      "userId": localStorage.getItem("user"),
      "currentPassword": form.currentPassword,
      "newPassword": form.newPassword
    }
    const response = await AuthService.updatePassword(data);
    console.log(response);
    $toast.success('Contraseña actualizada correctamente');
    form.currentPassword = '';
    form.newPassword = '';
    form.confirmPassword = '';
  } catch (error) {
    $toast.error('Error al actualizar la contraseña');
    console.error(error);
  }
};

onMounted(async () => {
  // Cargar datos del perfil
  try {
    const response = await AuthService.getInfoUser(localStorage.getItem("user"));
    profile.value = response;
    form.phone = response.phone;
  } catch (error) {
    $toast.error('Error al cargar el perfil');
    console.error(error);
  }
});
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>