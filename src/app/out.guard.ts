import { CanDeactivateFn } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { Deactivatable } from './deactivatable';

export const outGuard: CanDeactivateFn<Deactivatable> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log('out guard');
  return component.isDeactivatable();
};
