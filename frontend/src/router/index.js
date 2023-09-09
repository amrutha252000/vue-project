import {createRouter, createWebHistory} from 'vue-router';
import SportsPage from '../components/SportsPage.vue';
import Cricket from '../components/Cricket.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SportsPage,
  },
  {
    path: '/batminton',
    name: 'Batminton',
    component: () => import('../components/Batminton.vue'),
  },
  {
    path: '/cricket',
    name: 'Cricket',
    component: () => import('../components/Cricket.vue'),
  },
  {
    path: '/tennis',
    name: 'Tennis',
    component: () => import('../components/Tennis.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;








