import { CanActivateFn } from '@angular/router';

export const barGuard: CanActivateFn = (route, state) => {
  console.log('bar guard');
  return true;
};
