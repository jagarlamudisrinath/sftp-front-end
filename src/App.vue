<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import AppBar from '@/components/AppBar.vue';
import NavigationBar from '@/components/NavigationBar.vue';

const drawer = ref(true);
</script>

<template>
  <v-card>
    <v-layout>
      <AppBar @toggle-drawer="drawer = !drawer" />
      <NavigationBar v-model:drawer="drawer" />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>
