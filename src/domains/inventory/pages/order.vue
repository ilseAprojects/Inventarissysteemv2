<script lang="ts" setup>
import { computed, ref } from 'vue';
import { getAllProducts, updateProduct } from '../store';
import type { InventoryItem } from '../types';
import router from '../../../router';

const lowStockProducts = computed(() =>
  getAllProducts().filter(p => p.actualAmount < p.minimumAmount)
);

const orderAmounts = ref<Record<number, number>>({});
const checked = ref<Record<number, boolean>>({});

const toggleCheck = (product: InventoryItem) => {
  checked.value[product.id] = !checked.value[product.id];
  if (checked.value[product.id]) {

    orderAmounts.value[product.id] = product.minimumAmount - product.actualAmount;
  } else {
    delete orderAmounts.value[product.id];
  }
};

const handleSubmit = () => {
  for (const product of lowStockProducts.value) {
    if (checked.value[product.id]) {
      updateProduct({
        ...product,
        actualAmount: product.actualAmount + (orderAmounts.value[product.id] ?? 0),
      });
    }
  }
  router.push('/');
};
</script>

<template>
  <h2>Lage Voorraad</h2>
  <table>
    <thead>
      <tr>
        <th>Bestellen</th>
        <th>Product</th>
        <th>Huidige Voorraad</th>
        <th>Minimale Voorraad</th>
        <th>Bijbesteld</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in lowStockProducts" :key="product.id">
        <td><input type="checkbox" :checked="checked[product.id]" @change="toggleCheck(product)" /></td>
        <td>{{ product.name }}</td>
        <td>{{ product.actualAmount }}</td>
        <td>{{ product.minimumAmount }}</td>
        <td>
          <input
            v-if="checked[product.id]"
            type="number"
            v-model.number="orderAmounts[product.id]"
            :min="1"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <button @click="handleSubmit" :disabled="!Object.keys(orderAmounts).length">
    Bestelling bevestigen
  </button>
  <button @click="router.push('/')">Annuleren</button>
</template>
