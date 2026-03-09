<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getAllProducts } from '../store';
import ProductsTable from '../components/ProductsTable.vue';

const router = useRouter()

const goToCreate = () => router.push({ name: 'Create' })
const goToOrder = () => router.push({ name: 'Order' })

</script>

<template>
  <div>
    <ProductsTable :products="getAllProducts()" />
  </div>
  <button @click="goToCreate">Nieuw product toevoegen</button>
  <button @click="goToOrder">Nieuwe voorraad bestellen</button>
</template>
