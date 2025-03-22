<template>
  <v-card>
    <v-card-title class="d-flex align-center">
            Vendor Types
            <v-spacer></v-spacer>
            <v-btn color="primary" prepend-icon="mdi-plus" @click="dialog = true">
              New Vendor Type
            </v-btn>
          </v-card-title>
    <v-card-text>
      <v-table density="comfortable" class="vendor-type-table">
        <thead>
          <tr>
            <th class="text-left font-weight-bold primary--text">Type Name</th>
            <th class="text-left font-weight-bold primary--text">Description</th>
            <th class="text-left font-weight-bold primary--text">Vendors Count</th>
            <th class="text-left font-weight-bold primary--text">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="type in vendorTypes" :key="type.name" class="vendor-type-row">
            <td class="text-body-1">{{ type.name }}</td>
            <td class="text-body-1">{{ type.description }}</td>
            <td>
              <v-chip
                color="info"
                size="small"
                class="font-weight-medium"
              >
                {{ type.vendorCount }}
              </v-chip>
            </td>
            <td>
              <v-btn
                icon="mdi-pencil"
                variant="text"
                size="small"
                color="primary"
                class="mr-2"
              ></v-btn>
              <v-btn
                icon="mdi-delete"
                variant="text"
                size="small"
                color="error"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
  <!-- Create Vendor Type Dialog -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Create New Vendor Type</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="createVendorType">
            <v-text-field
              v-model="newVendorType.name"
              label="Name"
              required
            ></v-text-field>
            <v-textarea
              v-model="newVendorType.description"
              label="Description"
              rows="3"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="createVendorType">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const vendorTypes = [
  { name: 'Data Provider', description: 'Provides data feeds and information', vendorCount: 12, createdDate: '2023-12-01' },
  { name: 'Security Service', description: 'Provides security and encryption services', vendorCount: 8, createdDate: '2023-12-05' },
  { name: 'Cloud Service', description: 'Provides cloud infrastructure services', vendorCount: 5, createdDate: '2023-12-10' },
  { name: 'Analytics Provider', description: 'Provides data analytics services', vendorCount: 6, createdDate: '2023-12-15' },
  { name: 'Integration Service', description: 'Provides system integration services', vendorCount: 4, createdDate: '2023-12-20' }
]

const dialog = ref(false)
const newVendorType = ref({
  name: '',
  description: ''
})

const createVendorType = () => {
  // TODO: Implement actual vendor type creation
  console.log('Creating vendor type:', newVendorType.value)
  dialog.value = false
  // Reset form
  newVendorType.value = {
    name: '',
    description: ''
  }
}
</script>

<style scoped>
.vendor-type-table {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.vendor-type-table th {
  background-color: #f5f5f5;
  font-size: 1.1em;
  padding: 16px !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12) !important;
}

.vendor-type-table td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.vendor-type-row:hover {
  background-color: #f5f7fa;
}

@media (max-width: 600px) {
  .vendor-type-table th,
  .vendor-type-table td {
    padding: 8px !important;
    font-size: 0.9em;
  }
}
</style>