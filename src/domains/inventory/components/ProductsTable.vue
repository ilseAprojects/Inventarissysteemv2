<script lang="ts" setup>
import router from '../../../router';
import Edit from '../pages/edit.vue';
import type { InventoryItem } from '../types';


defineProps<{ products: InventoryItem[] }>();

const goToEdit = () => router.push(Edit);


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
        <tr v-for="product in products">
        <td>{{ product.name }} </td>
        <td>{{ product.actualAmount }} </td>
        <td>{{ product.minimumAmount }} </td>
        <td> </td>
        <button @click="goToEdit">Bewerken</button>
      </tr>

    </tbody>
  </table>
</template>
