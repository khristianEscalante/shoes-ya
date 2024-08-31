<template>
    <div>
        <NavComponent />
        <main>
            <router-view />
        </main>
        <FooterComponent />
    </div>
</template>
<script setup>
import NavComponent from '../components/Nav/NavComponent.vue'
import FooterComponent from '../components/Footer/FooterComponent.vue'
</script>