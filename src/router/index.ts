import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TareaView from '../views/TareaView.vue';
import MultimediaView from '../views/MultimediaView.vue';
import ComponenteView from '../views/ComponenteEjemplo.vue';
import ApiView from '../views/ApiView.vue';
import ApiEquiposView from '../views/ApiEquiposView.vue';

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
    path: '/componente_ejemplo',
    name: 'Componente Ejemplo',
    component: ComponenteView,
  },
  {
    path: '/multimedia',
    name: 'multimedia',
    component: MultimediaView,
  },
  {
    path: '/api',
    name: 'api',
    component: ApiView,
  },
  {
    path: '/equipos-api',
    name: 'equipos-api',
    component: ApiEquiposView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
