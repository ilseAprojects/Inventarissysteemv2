<script lang="ts" setup>
import ProductsTable from '../components/ProductsTable.vue';
import { getAllProducts } from '../store';


</script>

<template>
  <div>
    <ProductsTable :products="getAllProducts" />
  </div>
</template>
