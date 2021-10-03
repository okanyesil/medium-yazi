import { createReducer, on } from '@ngrx/store';
import { BookModel } from '../models/bookModel';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface State {
  books: BookModel[];
  selectedBook: BookModel;

}

export const initialState: State = {
  books: [
    {
      bookId: 1,
      bookName: "Simyacı",
      author: "Paulo Coelho"
    },
    {
      bookId: 2,
      bookName: "Suç ve Ceza",
      author: "Fyodor Dostoyevski "
    },
    {
      bookId: 3,
      bookName: "Yeraltından Notlar",
      author: "Fyodor Dostoyevski "
    },
    {
      bookId: 4,
      bookName: "Kürk Mantolu Madonna",
      author: "Sabahattin Ali"
    },
    {
      bookId: 5,
      bookName: "Amok Koşucusu",
      author: "Stefan Zweig"
    }
    
  ],
  selectedBook: null
};


export const bookReducer = createReducer(
  initialState,
  on(AppActions.loadBooks, state => state),
  on(AppActions.addBook, (state, { book }) => {
    return {
      books: [...state.books, book],
      selectedBook: null
    }
  }),
  on(AppActions.selectBookById, (state, {bookId}) => {
    let sBook: BookModel = null;
    state.books.forEach(value => {
      if( value.bookId == bookId ) {
        return sBook = value;
      }
    })
    return {
      ...state,
      selectedBook: sBook
    }
  }),
  on(AppActions.deleteBook, (state, {id}) => {
    return {
      books: state.books.filter(book => book.bookId != id),
      selectedBook: null
    }
  }) 

);

