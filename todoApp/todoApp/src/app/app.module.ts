import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { bookReducer } from './+state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    DeleteBookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    StoreModule.forRoot({app: bookReducer}),
    StoreDevtoolsModule.instrument({ }),
    // EffectsModule.forRoot([]),
    // StoreModule.forFeature([]),
    // EffectsModule.forFeature([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
