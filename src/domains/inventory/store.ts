import { ref } from 'vue'
import type { InventoryItem } from './types';


const product = ref<InventoryItem[]>(
    [
        {id: 1, name: "A",  actualAmount: 50, minimumAmount: 20},
        {id: 2, name: "B",  actualAmount: 75, minimumAmount: 20},
        {id: 3, name: "C",  actualAmount: 18, minimumAmount: 20},
        {id: 4, name: "D",  actualAmount: 2, minimumAmount: 20}
    ]
);

let idCounter = product.value.length + 1;

export const getAllProducts = (() => product.value)

export const getProductById = (id: string) => 
  product.value.find(p => p.id === Number(id))

export const addProduct = (newProduct: InventoryItem) => {
  product.value.push({
    ...newProduct,
    id: idCounter++,
  });
};

export const removeProduct = (id: number) => {
  product.value = product.value.filter(g => g.id !== Number(id))
}

export const updateProduct = (updatedproduct: { id: number; name: string; actualAmount: number; minimumAmount: number; }) => {
  const index = product.value.findIndex(
    g => g.id === updatedproduct.id
  )

  if (index !== -1) {
    product.value[index] = { ...updatedproduct }
  }
}