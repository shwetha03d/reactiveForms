import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  marriageForm=new FormGroup({
    age:new FormControl('',[Validators.required,Validators.min(18)]),
    gender:new FormControl(''),
    qualification:new FormControl(''),
    address:new FormGroup({
      city:new FormControl('',[Validators.required,Validators.minLength(4)]),
      state:new FormControl(''),
      status:new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  get m(){
    return this.marriageForm.controls;
  }

  get a(){
    return (<FormGroup>this.marriageForm.controls.address).controls;
  }

  get display(){
    return JSON.stringify(this.marriageForm.value);
  }

  onSubmit(){
    console.log('invoked onSubmit');
    this.marriageForm.setValue({
      age:'20',
      gender:'F',
      qualification:'BE'

    });
  }

  onSingle(){
    console.log('invoked onSingle');
    this.marriageForm.patchValue({
      age:25,
     
    });
    
  }

  onForm(){
    return this.marriageForm;
  }

  
}
