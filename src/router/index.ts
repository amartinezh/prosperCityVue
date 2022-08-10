import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TareaView from '../views/TareaView.vue';
import MultimediaView from '../views/MultimediaView.vue';
import ComponenteView from '../views/ComponenteEjemplo.vue';

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

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
