<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductForm from '../components/ProductForm.vue';
import { getProductById, updateProduct } from '../store';
import type { InventoryItem } from '../types';
import router from '../../../router';

const route = useRoute();

const product = computed(() => getProductById(route.params.id as string));

const handleSubmit = (updated: InventoryItem) => {
  updateProduct(updated);
  router.push('/');
};
</script>

<template>
  <h2> Product bewerken </h2>
  <div>
    <ProductForm v-if="product" :products="product" @submit="handleSubmit" />
    <p v-else>Product niet gevonden.</p>
  </div>
</template>
