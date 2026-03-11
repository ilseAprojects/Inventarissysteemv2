<script lang="ts" setup>

import ProductForm from '../components/ProductForm.vue';
import { addProduct, } from '../store';
import type { InventoryItem } from '../types';
import router from '../../../router';


const emptyProduct: InventoryItem = {
  id: 0,
  name: '',
  actualAmount: 0,
  minimumAmount: 0,
};

const handleSubmit = (newProduct: InventoryItem,) => {
  addProduct(newProduct,)
  router.push('/');
};
</script>

<template>
  <h2>Product toevoegen</h2>
  <div>
    <ProductForm :products="emptyProduct" @submit="handleSubmit" />
  </div>
</template>
