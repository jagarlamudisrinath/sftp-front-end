
<script setup>
import { ref } from 'vue'

const settings = ref({
  defaultPath: '/',
  showHiddenFiles: false,
  timeout: 30
})
</script>

<template>
  <v-card>
    <v-card-title>Settings</v-card-title>
    <v-card-text>
      <v-text-field v-model="settings.defaultPath" label="Default Path"></v-text-field>
      <v-switch v-model="settings.showHiddenFiles" label="Show Hidden Files"></v-switch>
      <v-text-field v-model="settings.timeout" label="Connection Timeout (seconds)" type="number"></v-text-field>
    </v-card-text>
  </v-card>
</template>
