import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBooks } from '../+state/app.selectors';
import { BookModel } from '../models/bookModel';
import { State } from '../+state/app.reducer';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<BookModel[]>;

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.bookList$ = this.store.pipe(select(selectBooks));
  
  }

}
