import { createAction, props } from '@ngrx/store';
import { BookModel } from '../models/bookModel';

export const loadBooks = createAction(
  '[Book] Load'
);

export const addBook = createAction(
  '[Book] Add',
  props<{book: BookModel}>()
)

export const deleteBook = createAction(
  '[Book] Delete',
  props<{id:number}>()
)
export const selectBookById = createAction(
  '[Book] Select Book',
  props<{bookId: number}>()
)



