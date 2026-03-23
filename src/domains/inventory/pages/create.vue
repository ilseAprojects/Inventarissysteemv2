<script lang="ts" setup>

import ProductForm from '../components/productForm.vue';
import { addProduct} from '../store';
import type { Product } from '../types';
import { useRouter } from 'vue-router';

const router = useRouter();
const emptyProduct: Product = {
  id: 0,
  name: '',
  actualAmount: 0,
  minimumAmount: 0,
};

const handleSubmit = (newProduct: Product) => {
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
