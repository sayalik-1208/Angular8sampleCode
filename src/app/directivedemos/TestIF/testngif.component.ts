import { Component } from '@angular/core';  
import { Employee } from "./emp";
@Component ({
   selector: 'app-ngif',
   templateUrl: './thengif.component.html',
   styleUrls: ['./thengif.component.css']
})

export class TheIfComponent
{
  appTitle: string = 'Students welcome ';
  status:boolean = false;
  flag1:boolean = false;
  emp=new Employee(1,'Sara Teens',45000) ;
  toggleFlag3=false;

  // arr:number[]=[12,34,5,3,7];
  // arrString:string[]=['Angular','javascript','typescript','node.js']
}