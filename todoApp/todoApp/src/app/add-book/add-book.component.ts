import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addBook } from '../+state/app.actions';
import { State } from '../+state/app.reducer';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookAdd = this.fb.group({
    bookId : [''],
    bookName: [''],
    author: ['']

  })

  constructor(
    private fb: FormBuilder,
     private router: Router,
     private store: Store<State>
     ) { }

  ngOnInit(): void {
  }
  saveBook(){
    this.store.dispatch(addBook({book: this.bookAdd.value }));
    this.router.navigateByUrl("/");

  }

}
