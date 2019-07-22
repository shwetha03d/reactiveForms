import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  data:Observable<any>;
  constructor() { }

  ngOnInit() {
  }

  dataSource(){
    console.log('invoked dataSource');
    this.data=new Observable(observer=>{
      setInterval(()=>{
        observer.next('Hello');
      },1000);

      setInterval(()=>{
        observer.next("Welcome");
      },3000);

      setInterval(()=>{
        //observer.next("To");
         observer.error(new Error('Error in subscription 5..'));
      },5000);

      setInterval(()=>{
        observer.next("X-workz");
      },7000);

      setInterval(()=>{
        observer.next("Rajajinagar");
        observer.complete();
      },9000);

    });
  }

  onSubscribe(){
    console.log('invoked onSubscribe');
    let sub1=this.data.subscribe(val=>{
      console.log("Value:"+val);
     // sub1.unsubscribe();

    },error=>{
      console.log("Error:"+error);
    });
  }

}
