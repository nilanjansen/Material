import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DefaultKeyValueDiffer } from '@angular/core/src/change_detection/differs/default_keyvalue_differ';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  priorities:string[] = ['High','Medium','Low'];
  departments:object[] = [
    {
      id:1,
      name:'Complaints'
    },
    {
      id:2,
      name:'Loyalty'
    },
    {
      id:3,
      name:'Promotions'
    },
  ];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl:['',Validators.required],
      priorityCtrl:['',Validators.required],
      departmentCtrl:['',Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl:['',Validators.required]
    });

  }
  getDepartmentName(department:Object){
    return department?department['name']:undefined;
  }
}
