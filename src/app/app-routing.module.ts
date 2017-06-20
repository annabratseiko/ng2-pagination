import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ListComponent }   from './list/list.component';
import { PaginationWrapperComponent }   from './pagination-wrapper/pagination-wrapper.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/list/1/5', pathMatch: 'full'},
  { path: 'list/:num/:limit', component: PaginationWrapperComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}