<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      Vendors
      <v-spacer></v-spacer>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="dialog = true">
        New Vendor
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-table density="comfortable" class="vendor-table">
        <thead>
          <tr>
            <th class="text-left font-weight-bold primary--text">Name</th>
            <th class="text-left font-weight-bold primary--text">Contact</th>
            <th class="text-left font-weight-bold primary--text">Status</th>
            <th class="text-left font-weight-bold primary--text">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vendor in vendors" :key="vendor.id" class="vendor-row">
            <td>{{ vendor.name }}</td>
            <td>{{ vendor.contact }}</td>
            <td>
              <v-chip
                :color="vendor.status === 'Active' ? 'success' : 'warning'"
                size="small"
                class="font-weight-medium"
              >
                {{ vendor.status }}
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

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>Create New Vendor</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="createVendor">
              <v-text-field
                v-model="newVendor.name"
                label="Vendor Name"
                required
              ></v-text-field>
              <v-select
                v-model="newVendor.type"
                :items="vendorTypes"
                label="Vendor Type"
                required
              ></v-select>
              <v-text-field
                v-model="newVendor.email"
                label="Email"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="newVendor.phone"
                label="Phone"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" variant="text" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" @click="createVendor">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const newVendor = ref({
  name: '',
  type: null,
  status: 'Active',
  email: '',
  phone: ''
})

const vendorTypes = [
  'Data Provider',
  'Security Service',
  'Analytics Provider',
  'Integration Service'
]

const createVendor = () => {
  // TODO: Implement actual vendor creation
  console.log('Creating vendor:', newVendor.value)
  dialog.value = false
  // Reset form
  newVendor.value = {
    name: '',
    type: null,
    status: 'Active',
    email: '',
    phone: ''
  }
}

const vendors = ref([
  { id: 1, name: 'Acme Corp', contact: 'john@acme.com', status: 'Active' },
  { id: 2, name: 'Global Tech', contact: 'sarah@globaltech.com', status: 'Inactive' },
  { id: 3, name: 'Zone C', location: 'Tokyo', status: 'Active' }
])
</script>

<style scoped>
.vendor-table {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.vendor-table th {
  background-color: #f5f5f5;
  font-size: 1.1em;
  padding: 16px !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12) !important;
}

.vendor-table td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.vendor-row:hover {
  background-color: #f5f7fa;
}
</style>