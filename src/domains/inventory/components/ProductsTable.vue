<script lang="ts" setup>
import { removeProduct } from '../store';
import type { InventoryItem } from '../types';
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps<{ products: InventoryItem[] }>();

const goToEdit = (id: number) => router.push({ name: 'Edit', params: { id } })

const stockStatus = (product: InventoryItem) => {
  if (product.actualAmount === 0) return { class: 'out-of-stock', text: 'Uitverkocht' };
  if (product.actualAmount < product.minimumAmount) return { class: 'low-stock', text: 'Tekort' };
  return { class: 'stocked', text: 'Oke' };
}

const handleRemove = (id: number) => {
  if (!window.confirm("Weet je zeker dat je dit wilt verwijderen?")) return;
  removeProduct(id);
}



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
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }} </td>
        <td>{{ product.actualAmount }} </td>
        <td>{{ product.minimumAmount }} </td>
        <td :class="stockStatus(product).class">
          {{ stockStatus(product).text }}
        </td>
        <td>
          <button @click="goToEdit(product.id)">Bewerken</button>
          <button class="delete-button" @click="handleRemove(product.id)">Verwijderen</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<style scoped>
.low-stock {
  background-color: orange;
  color: black;
}

.out-of-stock {
  background-color: #dd1212;
  color: white;
}

.stocked {
  background-color: rgb(93, 170, 93);
  color: black
}

.delete-button:hover {
  background-color: #dd1212
}
</style>