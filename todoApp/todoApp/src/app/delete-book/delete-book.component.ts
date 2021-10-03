import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { deleteBook, selectBookById } from '../+state/app.actions';
import { State } from '../+state/app.reducer';
import { selectSelectedBook } from '../+state/app.selectors';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookId;
  deleteForm = this.fb.group({
    bookId: [''],
    bookName: [''],
    author: ['']
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<State>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(selectBookById({bookId: this.bookId}));
    this.store.pipe(select(selectSelectedBook)).subscribe(value => {
      this.deleteForm.setValue({
        bookId: value.bookId,
        bookName: value.bookName,
        author: value.author
      });

    })
    

  }
  delete() {
    let checkStatus = confirm("Kitap silinecek emin misiniz?")
    if(checkStatus) {
      this.store.dispatch(deleteBook({id: this.bookId}));
      this.router.navigateByUrl("/");
    } else {
      this.router.navigateByUrl("/");
    }
    
  }

}
