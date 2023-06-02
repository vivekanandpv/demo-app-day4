import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService).user$.pipe(
    map((u) => {
      if (u) {
        return u.roles.includes('admin')
          ? true
          : router.createUrlTree(['unauthorized']);
      }

      return router.createUrlTree(['login'], {
        queryParams: {
          returnUrl: state.url,
        },
      });
    })
  );
};
