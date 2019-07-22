import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  tourismForm=this.builder.group({
    place:['',[Validators.required,Validators.minLength(4)]],
    distanceFrom:['',[Validators.required,Validators.minLength(4)]],
    distanceTo:['',[Validators.required,Validators.minLength(4)]],
    famousFor:['',[Validators.required,Validators.minLength(4)]],
  });

 

  ngOnInit() {
  }

onSubmit(){
  console.log('invoked on submit');
}

}
