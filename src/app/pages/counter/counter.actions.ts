import { createAction } from '@ngrx/store';

export const storeName = '[Count]';

export const CounterActions = {
  increment: createAction('[Counter] Increment'),
  reset: createAction('[Counter] Reset'),
  decrement: createAction('[Counter] Decrement'),
};
