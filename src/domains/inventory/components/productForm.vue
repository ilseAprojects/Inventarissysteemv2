<script lang="ts" setup>
import { ref } from 'vue';
import type { InventoryItem } from '../types';
import router from '../../../router';

const {products} = defineProps<{ products: InventoryItem }>();
const localForm = ref({...products});

const emit = defineEmits(['submit']);

const submit = () => {
  if (!localForm.value.name.trim()) return; 
  emit('submit', localForm.value);
  router.push({ name: 'Overview' });
};

</script>

<template>
<form @submit.prevent="submit">
  <div> 
    <label>Naam</label>
    <input v-model="localForm.name" type="text" required>
  </div>

  <div>
    <label>Huidige voorraad</label>
    <input v-model="localForm.actualAmount" type="number" required>
  </div>

    <div>
    <label>Minimale voorraad</label>
    <input v-model="localForm.minimumAmount" type="number" required>
  </div>
  
  <div>
     <button type="submit">Submit</button>
  </div>
</form>
</template>
