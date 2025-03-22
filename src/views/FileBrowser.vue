
<script setup>
import { ref } from 'vue'

const currentPath = ref('/')
const files = ref([])
const selected = ref([])

const fetchFiles = async () => {
  // TODO: Implement actual file fetching
  files.value = [
    { name: 'folder1', type: 'dir', size: '-', modified: '2023-12-01' },
    { name: 'file1.txt', type: 'file', size: '1.2MB', modified: '2023-12-01' }
  ]
}

const deleteFiles = async () => {
  // TODO: Implement file deletion
}

fetchFiles()
</script>

<template>
  <div>
    <v-toolbar dense>
      <v-text-field v-model="currentPath" label="Current Path" readonly></v-text-field>
      <v-btn color="error" :disabled="!selected.length" @click="deleteFiles">Delete</v-btn>
    </v-toolbar>

    <v-data-table
      v-model="selected"
      :headers="[
        { title: 'Name', key: 'name' },
        { title: 'Type', key: 'type' },
        { title: 'Size', key: 'size' },
        { title: 'Modified', key: 'modified' }
      ]"
      :items="files"
      show-select
    ></v-data-table>
  </div>
</template>
