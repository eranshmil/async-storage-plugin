import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CounterState, Increment, Decrement } from '../store/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Select(CounterState)
  public counter$: Observable<number>;

  constructor(private store: Store) {

  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
