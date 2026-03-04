import { createMemoryHistory, createRouter } from 'vue-router'
import { inventoryRoutes } from '../domains/inventory/routes'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    ...inventoryRoutes
  ]
})

export default router