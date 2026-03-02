import overview from './pages/overview.vue'
import create from './pages/create.vue'
import edit from './pages/edit.vue'

export default [
  {
    path: '/',            
    name: 'overview',
    component: overview
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
    path: '/edit/:id',   
    name: 'edit',
    component: edit,      
  }
];
