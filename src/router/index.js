import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/work', name: 'Work', component: () => import('../pages/Work.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
