<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <p class="text-red-500 text-center mb-4">{{ message }}</p>
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">
        Admin Login
      </h1>
      <form @submit.prevent="handleLogin">
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
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2">
            Contraseña
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-green-700 text-white py-2 px-4 rounded-lg  hover:bg-green-800 transition-colors"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script setup>
import { reactive, ref } from "vue";
import AuthService from "@/Services/AuthService";
import router from "@/router";
const message = ref("");

const form = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const response = await AuthService.login(form.email, form.password);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", response.user.id);
    router.push("/admin");
  } catch (error) {
    if (error.response.status === 401) {
      message.value = "El usuario o la contraseña son incorrectos";
    }else{
      message.value = "Error del servidor";
    }
    console.error(error);
  }
};
</script>
  
  <style>
body {
  font-family: "Inter", sans-serif;
}
</style>
  