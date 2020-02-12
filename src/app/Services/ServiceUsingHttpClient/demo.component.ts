import { Component } from "@angular/core";
import { UserService } from "./user.service";


@Component({
    selector:'demo-user',
    templateUrl:'./demo.component.html',
    providers:[UserService]
})
export class DemoUserComp {
  data: any = []

  constructor(public appService: UserService) { }

  
  /* method to call get-api from app.service */
  getUsersFromService() {
    try {
      this.appService.getUser()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
          console.log(this.data);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
}