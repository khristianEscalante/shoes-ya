<template>
    <div>
        <NavAdmin />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import NavAdmin from '@/components/Nav/NavAdmin.vue';
</script>