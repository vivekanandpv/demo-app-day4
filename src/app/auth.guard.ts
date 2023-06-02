import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService).user$.pipe(
    map((u) => {
      if (!u) {
        return router.createUrlTree(['login'], {
          queryParams: {
            returnUrl: state.url,
          },
        });
      }

      return true;
    })
  );
};
