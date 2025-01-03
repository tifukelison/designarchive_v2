import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue';
import WorkPage from '../pages/Work.vue';
import AboutPage from '../pages/About.vue';
import BlogPage from '../pages/Blog.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/work', component: WorkPage },
  { path: '/about', component: AboutPage },
  { path: '/blog', component: BlogPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
