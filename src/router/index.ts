import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TareaView from '../views/TareaView.vue';
import DayanaView from '../views/DayanaView.vue';
import EmanuelView from '../views/EmanuelView.vue';

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
    path: '/componentDayana',
    name: 'componentDayana',
    component: DayanaView,
  },
  {
    path: '/componentEmanuel',
    name: 'componentEmanuel',
    component: EmanuelView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
