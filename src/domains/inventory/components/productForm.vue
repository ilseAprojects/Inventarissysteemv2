<script lang="ts" setup>
import { ref } from 'vue';
import type { InventoryItem } from '../types';
import router from '../../../router';

const { products } = defineProps<{ products: InventoryItem }>();
const localForm = ref({ ...products });

const emit = defineEmits(['submit']);

const submit = () => {
  if (!localForm.value.name.trim()) return;
  emit('submit', localForm.value);
  router.push({ name: 'Overview' });
};

</script>

<template>
  <form @submit.prevent="submit" class="form">
    <div class="form-group">
      <label>Naam</label>
      <input v-model="localForm.name" type="text" required>
    </div>
    <div class="form-group">
      <label>Huidige voorraad</label>
      <input v-model="localForm.actualAmount" type="number" required>
    </div>
    <div class="form-group">
      <label>Minimale voorraad</label>
      <input v-model="localForm.minimumAmount" type="number" required>
    </div>
    <div class="form-actions">
      <button type="submit">Opslaan</button>
      <button type="button" @click="router.push({ name: 'Overview' })">Annuleren</button>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.9em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

input {
  padding: 0.6em 0.8em;
  border-radius: 6px;
  border: 1px solid #333;
  background-color: #242424;
  color: inherit;
  font-size: 1em;
  transition: border-color 0.25s;
}

input:focus {
  outline: none;
  border-color: #555;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (prefers-color-scheme: light) {
  .form {
    background-color: #f9f9f9;
    border-color: #ddd;
  }

  label {
    color: rgba(0, 0, 0, 0.6);
  }

  input {
    background-color: #ffffff;
    border-color: #ccc;
  }

  input:focus {
    border-color: #aaa;
  }
}
</style>