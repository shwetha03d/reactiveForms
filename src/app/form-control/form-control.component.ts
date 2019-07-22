import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  institute=new FormControl('',[Validators.required,Validators.minLength(4)]);
  message;
  address:string='Rajajinagar';
  constructor() { }

  ngOnInit() {
    this.institute.valueChanges.subscribe(val=>{
      console.log("value change listener")
      console.log(val);
      this.message=`The institute i am in ${val} and Address is ${this.address}`;//string expression ${}
    });
  }

  onClick(){
    console.log('invoked onclick');
    this.institute.setValue('xworkz ODC');
  }

   get debug(){
    return this.institute.value;

  }

  onSync(){
    console.log('invoked onSync');
    console.log(this.institute);
    console.log("Touched:"+this.institute.touched);
    if(this.institute.valid){
      this.message="Data is valid";
    }
    else{
      this.message="Data is invalid";
    }
  }

}
