import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },  // Home route
  { path: '/question/category/:id', name: 'Question', component: () => import('@/views/QuestionPage.vue') },  // Question route
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
