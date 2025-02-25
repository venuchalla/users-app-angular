import { createReducer, createSelector, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    //console.log("state ===> ",state)
    const number = state.count + 1;
    return { count: number };
  }),
  on(CounterActions.decrement, (state) => {
    const number = state.count - 1;
    return { count: number };
  }),
  on(CounterActions.reset, (state) => {
    return { count: 0 };
  })
);
