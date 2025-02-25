import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, startWith } from 'rxjs';
import { CounterActions, storeName } from './counter.actions';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { CounterState } from './counter.reducer';
import { RootState } from '@app/state';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '@app/diectives/reverse.pipe';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,FormsModule,ReversePipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  //counter$: Observable<CounterState>;
  count$: Observable<Number>;
  rText : String ;

  constructor(private store: Store<RootState>, private titleService: Title) {
    this.rText=""
    titleService.setTitle('Counter App');
    this.count$ = this.store.select((state) => state.counter.count);
    //this.count$ = store.select((c) => {return c.count})
    //this.counter$.subscribe(c => this.count = c.count)
    
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
