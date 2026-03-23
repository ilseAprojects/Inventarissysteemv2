<script lang="ts" setup>
import ProductForm from '../components/productForm.vue';
import { getProductById, updateProduct } from '../store';
import type { Product } from '../types';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const product = getProductById(route.params.id as string);

const handleSubmit = (updated: Product) => {
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
