<template>

    <section class="bg-gray-100 py-10 ">

        <div class="container mx-auto  p-4 sm:p-6 bg-white shadow-md rounded-lg max-w-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Perfil de Usuario</h2>

            <!-- Nombre -->
            <div class="mb-4">
                <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="nombre"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su nombre">
            </div>

            <!-- Apellido -->
            <div class="mb-4">
                <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
                <input type="text" id="apellido"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su apellido">
            </div>

            <!-- Email -->
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" id="email"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su correo electrónico">
            </div>

            <!-- Teléfono -->
            <div class="mb-4">
                <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
                <input type="tel" id="telefono"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su número de teléfono">
            </div>

            <!-- Dirección -->
            <div class="mb-4">
                <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
                <input type="text" id="direccion"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su dirección">
            </div>

            <!-- Botón de Guardar Cambios -->
            <div class="flex justify-end">
                <button
                    class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    Guardar Cambios
                </button>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Contraseña</h2>
            <div class="mb-4">
                <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
                <input type="text" id="direccion"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su dirección">
            </div>
            <div class="mb-4">
                <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
                <input type="text" id="direccion"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ingrese su dirección">
            </div>
            <div class="flex justify-end">
                <button
                    class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    Guardar Cambios
                </button>
            </div>
        </div>
        

    </section>
</template>