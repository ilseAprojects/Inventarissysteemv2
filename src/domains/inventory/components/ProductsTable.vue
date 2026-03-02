<script lang="ts" setup>
import type { InventoryItem } from '../types';

defineProps<{products: InventoryItem[]}>()

</script>

<template>
  <h1>Inventaris Systeem</h1>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Huidige Voorraad</th>
        <th>Minimale Voorraad</th>
        <th>Status</th>
        <th>Acties</th>
      </tr>
    </thead>

    <tbody>
        <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }} </td>
            <td>{{ product.actualAmount }} </td>
            <td>{{ product.minimumAmount }} </td>
            <td> </td>
            <!-- <button @click="routes.push('/edit')">Bewerken</button> -->
        </tr>

    </tbody>

  </table>
</template>
