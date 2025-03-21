<template>
  <v-card>
    <v-layout>
      <!-- Removed AppBar and NavigationBar -->
      <v-main> 
        <h1>Dashboard</h1>
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);
</script>
