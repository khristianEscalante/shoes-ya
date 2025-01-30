<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">
        Perfil de Administrador
      </h1>
      <form @submit.prevent="updateProfile">
        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="admin@ejemplo.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <!-- Password Field -->
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-medium mb-2">
            Nueva Contraseña
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <!-- Confirm Password Field -->
        <div class="mb-6">
          <label
            for="confirmPassword"
            class="block text-gray-700 font-medium mb-2"
          >
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Actualizar Perfil
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script setup>
import { reactive } from "vue";

const form = reactive({
  email: "admin@ejemplo.com", // Correo actual del administrador
  password: "",
  confirmPassword: "",
});

const updateProfile = () => {
  if (form.password !== form.confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Aquí puedes agregar la lógica para enviar los datos al backend
  console.log("Perfil actualizado con:", form);
  alert("Perfil actualizado correctamente.");
};
</script>
  
  <style>
body {
  font-family: "Inter", sans-serif;
}
</style>
  