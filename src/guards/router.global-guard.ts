import { NavigationGuardNext, Route } from 'vue-router';

export const globalGuard = (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  // TODO: Inject state auth status

  if (to.path !== '/profile') {
    next();
  } else {
    next({ path: '/login' });
  }
};
