import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectBooks = createSelector(
  selectAppState,
  (state: fromApp.State) => state.books
);

export const selectSelectedBook = createSelector(
  selectAppState,
  (state: fromApp.State) => state.selectedBook
)


