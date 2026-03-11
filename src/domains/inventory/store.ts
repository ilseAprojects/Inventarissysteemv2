import { ref } from "vue";
import type { InventoryItem } from "./types";

const product = ref<InventoryItem[]>([
  { id: 1, name: "A", actualAmount: 50, minimumAmount: 20 },
  { id: 2, name: "B", actualAmount: 75, minimumAmount: 20 },
  { id: 3, name: "C", actualAmount: 18, minimumAmount: 20 },
  { id: 4, name: "D", actualAmount: 2, minimumAmount: 20 },
  { id: 5, name: "E", actualAmount: 46, minimumAmount: 20 },
  { id: 6, name: "F", actualAmount: 30, minimumAmount: 20 },
  { id: 7, name: "G", actualAmount: 90, minimumAmount: 20 },
]);

let idCounter = product.value.length + 1;

export const getAllProducts = () => product.value;

export const getProductById = (id: string) =>
  product.value.find((item) => item.id === Number(id));

export const addProduct = (newProduct: InventoryItem) => {
  product.value.push({
    ...newProduct,
    id: idCounter++,
  });
};

export const removeProduct = (id: number) => {
  product.value = product.value.filter((item) => item.id !== id);
};

export const updateProduct = (updatedProduct: InventoryItem) => {
  const index = product.value.findIndex(
    (item) => item.id === updatedProduct.id,
  );

  if (index !== -1) {
    product.value[index] = { ...updatedProduct };
  }
};
