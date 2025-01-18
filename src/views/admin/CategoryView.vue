<template>
    <div>
        <div class="flex h-screen">
            <div class="w-1/2 h-full p-2">
                <h1 class="my-2 text-xl">
                    Listado de Categorias
                </h1>
                <div class="grid grid-cols-3 gap-3">
                    <div v-for="category in listCategories" :key="category.id" class="w-64 flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                        <div class="flex-grow py-3">
                            <h2 class="text-gray-900 title-font font-medium">{{ category.name }}</h2>
                            <p class="text-gray-700 my-1">{{ category.description }}</p>
                        </div>
                        <div class="flex gap-3">
                            <button @click="getByid(category.id)" class="bg-green-300 text-white p-2 rounded-md">
                                Editar
                            </button>
                            <button @click="deleteCategory(category.id)" class="bg-red-300 text-white p-2 rounded-md">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-1/2 h-full p-3 bg-gray-100">
                <h1 class="py-2 text-xl">Agregar categorias</h1>
                <div class="flex flex-col gap-3">
                    <p>Nombre</p>
                    <input v-model="categoryData.name" class="border p-2 border-gray-300 rounded-md w-full" type="text">
                    <p>Descripcion</p>
                    <textarea v-model="categoryData.description" class="border p-2 border-gray-300 rounded-md w-full" cols="30" rows="10"></textarea>
                </div>
                <button v-if="categoryData.id === 0" @click="create()" class="p-3 w-full bg-green-500 text-white rounded-lg my-3">
                    Guardar categoria
                </button>
                <button v-else @click="updateCategory" class="p-3 w-full bg-green-500 text-white rounded-lg my-3">
                    Editar categoria
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoriesServices from '@/Services/CategoriesService';
import { onMounted, ref } from 'vue';

const service = new CategoriesServices();

const categoryData = ref({
    id: 0,
    name: '',
    description: ''
})

const listCategories = ref([])

const getCategories = async () => {
    try {
        const response = await service.getAll();
        console.log(response);
        listCategories.value = response;
    } catch (error) {
        console.log(error);
    }
}

const create = async ()=>{
    try {
        const response = await service.create(categoryData.value);
        console.log(response);
        getCategories();
    } catch (error) {
        console.log(error);
        
    }
}

const deleteCategory = async (id)=>{
    try {
        const response = await service.delete(id); 
        console.log(response);
        getCategories();
    } catch (error) {
       console.log(error);
    }
}

const getByid= async (id)=>{
    try {
        const response = await service.getById(id);
        categoryData.value.name = response.name;
        categoryData.value.id = response.id;
        categoryData.value.description = response.description;
    } catch (error) {
        console.log(error);
        
    }
}

const updateCategory = async ()=>{
    try {
        let data ={
            name : categoryData.value.name,
            description: categoryData.value.description
        }
        const response = await service.update(categoryData.value.id, data );
        console.log(response);
        categoryData.value.id = 0;
        getCategories();
        categoryData.value.name= '';
        categoryData.value.description= '';
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getCategories();
})


</script>