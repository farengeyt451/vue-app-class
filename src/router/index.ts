import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

/** Modules */
import Main from '@/modules/features/main';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
