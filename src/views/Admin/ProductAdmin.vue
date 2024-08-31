<template>
    <div class="antialiased sans-serif bg-gray-200 h-screen">
        <div class="container mx-auto py-6 px-4">
            <h1 class="text-3xl py-4 border-b mb-5">Productos</h1>
            <div class="mb-4 flex justify-between items-center">
                <div class="flex-1 pr-4">
                    <div class="relative md:w-1/3">
                        <input v-model="searchQuery" type="search"
                            class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder="Search..." />
                        <div class="absolute top-0 left-0 inline-flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative" style="height: 405px;">
                <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                    <thead>
                        <tr class="text-left">
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
            
                            </th>
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Nombre
                            </th>
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Precio
                            </th>
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Categoria
                            </th>
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Descripciones
                            </th>
                            <th
                                class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in filteredlistProducts" :key="product.productId">
                            <td class="border-dashed border-t border-gray-200 productId">
                                <img :src="product.image" class="w-16 h-16 rounded-full">
                            </td>
                            <td class="border-dashed border-t border-gray-200 firstName">
                                <span class="text-gray-700 px-6 py-3 flex items-center">{{ product.product }}</span>
                            </td>
                            <td class="border-dashed border-t border-gray-200 lastName">
                                <span class="text-gray-700 px-6 py-3 flex items-center">{{ product.price }}</span>
                            </td>
                            <td class="border-dashed border-t border-gray-200 emailAddress">
                                <span class="text-gray-700 px-6 py-3 flex items-center">{{ product.category }}</span>
                            </td>
                            <td class="border-dashed border-t border-gray-200 gender">
                                <span class="text-gray-700 px-6 py-3 flex items-center">{{ product.description }}</span>
                            </td>
                            <td class="border-dashed border-t border-gray-200 phoneNumber flex gap-2 py-2">
                                <button class="bg-yellow-100 text-yellow-600 p-2 rounded-md cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                <button class="bg-red-200 text-red-700 p-2 rounded-md cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductServices from '@/Services/ProductServices';

const service= new ProductServices();

const listProducts = ref([])

const searchQuery = ref('')

const filteredlistProducts = computed(() => {
    if (!searchQuery.value) {
        return listProducts.value
    }
    return listProducts.value.filter(product =>
        Object.values(product).some(value =>
            String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    )
});

const getAll=async ()=>{
    try {
        const response= await service.getAll();
        listProducts.value= response;
        console.log(listProducts.value);
        
    } catch (error) {
        console.error(error);
    }
}

onMounted(()=>{
getAll()
})

</script>