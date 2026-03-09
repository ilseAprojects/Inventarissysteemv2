import Overview from './pages/overview.vue'
import Create from './pages/create.vue'
import Edit from './pages/edit.vue'
import ProductForm from './components/ProductForm.vue'
import ProductsTable from './components/ProductsTable.vue'
import Order from './pages/order.vue'

export const inventoryRoutes = [
  {
    path: '/',            
    name: 'Overview',
    component: Overview
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',   
    name: 'Edit',
    component: Edit,
    props: true         
  },
  {
    path: '/ProductForm',
    name: 'ProductForm',
    component: ProductForm,
  },
  {
    path: '/ProductsTable',
    name: 'ProductsTable',
    component: ProductsTable,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]
