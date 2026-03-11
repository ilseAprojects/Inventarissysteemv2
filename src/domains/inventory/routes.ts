import Overview from "./pages/overview.vue";
import Create from "./pages/create.vue";
import Edit from "./pages/edit.vue";
import Order from "./pages/order.vue";

export const inventoryRoutes = [
  {
    path: "/",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
    props: true,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
];
