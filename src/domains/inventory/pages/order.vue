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

const toggleAll = () => {
  const shouldCheck = lowStockProducts.value.some(p => !checked.value[p.id]);

  for (const product of lowStockProducts.value) {
    checked.value[product.id] = shouldCheck;
    if (shouldCheck) {
      orderAmounts.value[product.id] = product.minimumAmount - product.actualAmount;
    } else {
      delete orderAmounts.value[product.id];
    }
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
        <td>
          <label class="switch">
            <input type="checkbox" :checked="checked[product.id]" @change="toggleCheck(product)" />
            <div class="slider round"></div>
          </label>
        </td>
        <td>{{ product.name }}</td>
        <td>{{ product.actualAmount }}</td>
        <td>{{ product.minimumAmount }}</td>
        <td>
          <input v-if="checked[product.id]" type="number" v-model.number="orderAmounts[product.id]" :min="1" />
        </td>
      </tr>
      <tr><button @click="toggleAll">Alles selecteren</button></tr>
    </tbody>
  </table>
  <button @click="handleSubmit" :disabled="!Object.keys(orderAmounts).length">
    Bestelling bevestigen
  </button>
  <button @click="router.push('/')">Annuleren</button>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: rgb(93, 170, 93)
}

input:focus+.slider {
  box-shadow: 0 0 1px rgb(93, 170, 93)
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


/* css for checkbox from //https://codepen.io/EssSaibot/pen/zZmZbP */
</style>