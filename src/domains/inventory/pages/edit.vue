<script lang="ts" setup>
import ProductForm from '../components/ProductForm.vue';
import {getProductById } from '../store';

</script>

<template>
    <div>
    <ProductForm :products="getProductById"> </ProductForm>
    </div>
</template>
