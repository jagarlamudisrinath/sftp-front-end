<template>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon variant="text" @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>PGP Decryption</v-toolbar-title>
      <v-spacer></v-spacer>
  
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>
  
      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>
  </template>
  
  <script setup>
  defineEmits(['toggle-drawer']);
  </script>
  