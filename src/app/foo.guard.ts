import { CanActivateFn } from '@angular/router';

export const fooGuard: CanActivateFn = (route, state) => {
  console.log('foo guard');
  return true;
};
