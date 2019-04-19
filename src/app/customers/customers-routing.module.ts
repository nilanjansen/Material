import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import {CutomerNewComponent} from './cutomer-new/cutomer-new.component';
const routes: Routes = [
  {
    path:'',
    component: CustomerListComponent
  },
  {
    path:'info',
    component:CustomerCardComponent
  },
  {
    path:'new',
    component:CutomerNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
