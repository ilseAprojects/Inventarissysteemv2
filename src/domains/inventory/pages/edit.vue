<script lang="ts" setup>
import { computed } from 'vue';
import ProductForm from '../components/ProductForm.vue';
import { getProductById, updateProduct } from '../store';
import type { InventoryItem } from '../types';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const product = computed(() => getProductById(route.params.id as string));

const handleSubmit = (updated: InventoryItem) => {
  updateProduct(updated);
  router.push('/');
};
</script>

<template>
  <div v-if="product">
    <h2> Product bewerken </h2>
    <ProductForm :product="product" @submit="handleSubmit" />
  </div>

  <div v-else>
    <p>Product niet gevonden.</p>
     <button @click="router.push('/')">Terug</button>
  </div>
</template>
