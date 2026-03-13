<script lang="ts" setup>

import ProductForm from '../components/productForm.vue';
import { addProduct} from '../store';
import type { InventoryItem } from '../types';
import { useRouter } from 'vue-router';

const router = useRouter();
const emptyProduct: InventoryItem = {
  id: 0,
  name: '',
  actualAmount: 0,
  minimumAmount: 0,
};

const handleSubmit = (newProduct: InventoryItem) => {
  addProduct(newProduct)
  router.push('/')
}
</script>

<template>
  <h2>Product toevoegen</h2>
  <div>
    <ProductForm :product="emptyProduct" @submit="handleSubmit" />
  </div>
</template>
