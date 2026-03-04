import { computed, ref } from 'vue'
import type { InventoryItem } from './types';

const product = ref<InventoryItem[]>(
    [
        {id: 1, name: "A",  actualAmount: 10, minimumAmount: 20},
        {id: 2, name: "B",  actualAmount: 10, minimumAmount: 20},
        {id: 3, name: "C",  actualAmount: 10, minimumAmount: 20},
        {id: 4, name: "d",  actualAmount: 10, minimumAmount: 20}
    ]
);

export const getAllProducts = computed(() => product.value)

