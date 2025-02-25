import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './pages/counter/counter.reducer';
import { User, userReducer } from './pages/user/state';

export interface RootState {
  counter: CounterState;
  user: User;
}

export const reducers: ActionReducerMap<RootState> = {
  counter: counterReducer,
  user: userReducer,
};
