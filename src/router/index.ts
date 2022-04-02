import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
<<<<<<< HEAD
import DayanaView from '../views/DayanaView.vue';
=======
import TareaView from '../views/TareaView.vue';
>>>>>>> 8693a4f0554fb44d0830dc29cb544e20e4438b42

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
<<<<<<< HEAD
    path: '/dayana',
    name: 'dayana',
    component: DayanaView,
  },
  {
      =======
    path: '/tarea',
    name: 'tarea',
    component: TareaView,
>>>>>>> 8693a4f0554fb44d0830dc29cb544e20e4438b42
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
