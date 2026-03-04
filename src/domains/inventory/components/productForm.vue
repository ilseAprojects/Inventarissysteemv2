<script lang="ts" setup>
import { ref } from 'vue';
import type { InventoryItem } from '../types';

const {products} = defineProps<{ products: InventoryItem }>();
const localForm = ref({...products});

const emit = defineEmits(['submit']);
const submit = () => {
  emit('submit', localForm.value)
};
</script>

<template>
    <table>
      <tr>
        <td>{{ localForm.name }} </td>
        <td>{{ localForm.actualAmount }} </td>
        <td>{{ localForm.minimumAmount }} </td>
        <button @click="submit">Submit</button>
        </tr>
    </table>

</template>
