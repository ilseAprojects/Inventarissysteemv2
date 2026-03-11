import { ref } from "vue";
import type { InventoryItem } from "./types";

const product = ref<InventoryItem[]>([
  { id: 1, name: "A", actualAmount: 50, minimumAmount: 20 },
  { id: 2, name: "B", actualAmount: 75, minimumAmount: 20 },
  { id: 3, name: "C", actualAmount: 18, minimumAmount: 20 },
  { id: 4, name: "D", actualAmount: 2, minimumAmount: 20 },
]);

let idCounter = product.value.length + 1;

export const getAllProducts = () => product.value;

export const getProductById = (id: string) =>
  product.value.find((p) => p.id === Number(id));

export const addProduct = (newProduct: InventoryItem) => {
  product.value.push({
    ...newProduct,
    id: idCounter++,
  });
};

export const handleRemove = (id: number) => {
  if (!window.confirm("Weet je zeker dat je dit wilt verwijderen?")) return;
  removeProduct(id);
};

export const removeProduct = (id: number) => {
  product.value = product.value.filter((item) => item.id !== id);
};

export const updateProduct = (updatedProduct: {
  id: number;
  name: string;
  actualAmount: number;
  minimumAmount: number;
}) => {
  const index = product.value.findIndex(
    (item) => item.id === updatedProduct.id,
  );

  if (index !== -1) {
    product.value[index] = { ...updatedProduct };
  }
};
