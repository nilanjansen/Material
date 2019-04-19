import { Component, OnInit } from '@angular/core';
import {FormControl,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cutomer-new',
  templateUrl: './cutomer-new.component.html',
  styleUrls: ['./cutomer-new.component.css']
})
export class CutomerNewComponent implements OnInit {
  emailFormControl:FormControl;
  constructor(public dialog:MatDialog,public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ])
  }
  // openRepDialog()
  // {
  //   debugger;
  //   const dialogRef= this.dialog.open(RepDialogComponent,{
  //     width:'250px',
  //     data:{}
  //   });
  //   dialogRef.afterClosed().subscribe(result=>{
  //       alert(`User Chose ${result}`);
  //   });
  // }
  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width:'250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }
  openUndoSnackBar()
  {
    const snackbarRef = this.snackBar.open('Customer Saved','Undo',{
      horizontalPosition:'end'
    });
    snackbarRef.onAction().subscribe(()=>{
      alert(`Undo that Save!`);
    });
  }

}
