import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TareaView from '../views/TareaView.vue';

import GrupoRojoView from '../views/GrupoRojoView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/tarea',
    name: 'tarea',
    component: TareaView,
  },
  {
    path: '/grupoRojo',
    name: 'grupoRojo',
    component: GrupoRojoView,
  },
  {
    path: '/azul',
    name: 'azul',
    component: () => import(/* webpackChunkName: "about" */ '../views/GrupoAzul.vue'),
  },
  {
    path: '/calculadora_prosper',
    name: 'calculadora',
    component: () => import(/* webpackChunkName: "about" */ '../views/calculadoraView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
