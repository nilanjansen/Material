import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CutomerNewComponent } from './cutomer-new/cutomer-new.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  declarations: [CustomerListComponent, CustomerCardComponent, CutomerNewComponent, RepDialogComponent],
  entryComponents:[RepDialogComponent]
})
export class CustomersModule { }
