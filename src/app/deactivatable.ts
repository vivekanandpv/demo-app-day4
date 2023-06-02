import { Observable } from 'rxjs';

export interface Deactivatable {
  isDeactivatable: () => boolean | Observable<boolean>;
}
