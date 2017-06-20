import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListComponent } from './list/list.component';
import { PaginationWrapperComponent } from './pagination-wrapper/pagination-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ListComponent,
    PaginationWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
