<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getAllProducts } from '../store';
import ProductsTable from '../components/ProductsTable.vue';
import Order from './order.vue';
import Create from './create.vue';

const router = useRouter()

const goToCreate = () => router.push(Create)
const goToOrder = () => router.push(Order)

</script>

<template>
  <div>
    <ProductsTable :products="getAllProducts" />
  </div>
  <button @click="goToCreate">Nieuw product toevoegen</button>
  <button @click="goToOrder">Bestellingen overzicht</button>
</template>
