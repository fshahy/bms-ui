import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import CustomersView from '../views/CustomersView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView
        },
        {
            path: '/customers',
            name: 'customers',
            component: CustomersView
        },
    ]
})

export default router
