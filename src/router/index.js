import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/principal',
    name: 'principal',
    component: () => import('../views/PrincipalView.vue')
  },
  {
    path: "/detalle/:id",
    name: "detalle",
    component: () => import("../views/FaunaDetalleView.vue"),
    props: true,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
