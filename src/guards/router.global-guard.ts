import { isUserAuthenticated } from '@/api';
import { NavigationGuardNext, Route } from 'vue-router';

export const globalGuard = (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  if (to.path !== '/profile' && !isUserAuthenticated()) {
    next();
  } else {
    next({ path: '/login' });
  }
};
