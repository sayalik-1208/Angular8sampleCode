import { Component } from '@angular/core';

@Component({
    selector :'login-comp',
    templateUrl:'./Login.component.html'
})
export class LoginComponent
{
  title:string ="Login Here"
  username:string;
  password:string;
  msg:string;
  
  validate():void{
      console.log(this.username);
      console.log(this.password);
      console.log("btn clicked");
      if(this.username==='jayshree' && this.password==='Jayshree@123')
        this.msg="Welcome User !!!"
      else
        this.msg=" Invalid User"
  }
}