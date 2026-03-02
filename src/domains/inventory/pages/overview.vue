<script lang="ts" setup>
import ProductsTable from '../components/ProductsTable.vue';
import { getAllProducts } from '../store';


</script>

<template>
  <div>
    <ProductsTable :products="getAllProducts" />
  </div>
  <button @click="router.push('../components/ProductsTable.vue')">Nieuw product</button>
</template>
