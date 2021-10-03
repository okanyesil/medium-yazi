import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [
  {path: "", component: BookListComponent, pathMatch:"full"},
  {path: 'add-book', component: AddBookComponent, pathMatch:"full"},
  {path: 'delete-book/:id', component: DeleteBookComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
