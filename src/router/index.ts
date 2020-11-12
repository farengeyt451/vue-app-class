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
  {
    path: '/about',
    name: 'About',
    /**
     * Route level code splitting
     * This generates a separate chunk (about.[hash].js) for this route
     * Which is lazy-loaded when the route is visited
     */
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
