<template>
  <v-card>
      <v-card-title class="d-flex align-center justify-space-between pb-4">
        <span class="text-h5">Landing Zones</span>
        <v-btn color="primary" prepend-icon="mdi-plus" @click="dialog = true">
          Create Landing Zone
        </v-btn>
      </v-card-title>
      <v-card-text>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title>New Landing Zone</v-card-title>
          <v-card-text>
            <v-text-field v-model="newZone.name" label="Zone Name" required></v-text-field>
            <v-text-field v-model="newZone.location" label="Location" required></v-text-field>
            <v-select :items="vendors" v-model="newZone.vendor" label="Vendor" required></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="createLandingZone">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-table density="comfortable" class="landing-zone-table">
        <thead>
          <tr>
            <th class="text-left font-weight-bold primary--text">Zone Name</th>
            <th class="text-left font-weight-bold primary--text">Source Path</th>
            <th class="text-left font-weight-bold primary--text">Target Path</th>
            <th class="text-left font-weight-bold primary--text">Assigned Vendors</th>
            <th class="text-left font-weight-bold primary--text">Status</th>
            <th class="text-left font-weight-bold primary--text">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="zone in landingZones" :key="zone.id" class="landing-zone-row">
            <td class="text-body-1">{{ zone.name }}</td>
            <td class="text-body-1">{{ zone.sourcePath }}</td>
            <td class="text-body-1">{{ zone.targetPath }}</td>
            <td>
              <v-chip
                v-for="vendor in zone.vendors"
                :key="vendor.id"
                size="small"
                class="mr-1"
                color="info"
              >
                {{ vendor.name }}
              </v-chip>
            </td>
            <td>
              <v-chip
                :color="zone.active ? 'success' : 'warning'"
                size="small"
                class="font-weight-medium"
              >
                {{ zone.active ? 'Active' : 'Inactive' }}
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
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const newZone = ref({
  name: '',
  location: '',
  vendor: null
});

const vendors = ref([
  { id: 1, name: 'LoanCare' },
  { id: 2, name: 'Mr. Cooper' },
  { id: 3, name: 'ServiMac' }
]);

const createLandingZone = () => {
  // TODO: Implement actual landing zone creation
  dialog.value = false;
  newZone.value = { name: '', location: '', vendor: null };
};

const landingZones = ref([
  {
    id: 1,
    name: 'Primary Zone',
    sourcePath: '/container/incoming',
    targetPath: '/container/processed',
    active: true,
    vendors: [
      { id: 1, name: 'Vendor A' },
      { id: 2, name: 'Vendor B' }
    ]
  },
  {
    id: 2,
    name: 'Secondary Zone',
    sourcePath: '/container/secondary/drop',
    targetPath: '/container/secondary/processed',
    active: true,
    vendors: [
      { id: 3, name: 'Vendor C' }
    ]
  }
]);
</script>

<style scoped>
.landingzone-table {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.landingzone-table th {
  background-color: #f5f5f5;
  font-size: 1.1em;
  padding: 16px !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12) !important;
}

.landingzone-table td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.landingzone-row:hover {
  background-color: #f5f7fa;
}

@media (max-width: 600px) {
  .landingzone-table th,
  .landingzone-table td {
    padding: 8px !important;
    font-size: 0.9em;
  }
}
</style>