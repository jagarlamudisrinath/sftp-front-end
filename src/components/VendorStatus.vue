<template>
  <v-card>
    <v-card-title>Vendor Status</v-card-title>
    <v-card-text>
      <v-table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Status</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 3" :key="n">
            <td>Vendor {{ n }}</td>
            <td>
              <v-chip
                :color="n % 2 === 0 ? 'success' : 'warning'"
                size="small"
              >
                {{ n % 2 === 0 ? 'Active' : 'Inactive' }}
              </v-chip>
            </td>
            <td>{{ new Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
// Component logic here if needed
</script>