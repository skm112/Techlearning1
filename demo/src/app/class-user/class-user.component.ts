import { Component, OnInit } from "@angular/core";
import { User } from "../common/model/user";

@Component({
  selector: "app-class-user",
  templateUrl: "./class-user.component.html",
  styleUrls: ["./class-user.component.css"]
})
export class ClassUserComponent implements OnInit {
  userObj: User;
  arrUser: User[];
  id: number = 0;

  constructor() {
    this.userObj = new User();
    this.arrUser = [];
  }

  ngOnInit() {}
  //------------------------------------------------
  edit(val) {
    this.userObj = val.copy();
    console.log(this.arrUser);
  }

  saveUpdate() {
    if (this.userObj.id > 0) {
      for (let i = 0; i < this.arrUser.length; i++) {
        if (this.arrUser[i].id == this.userObj.id) {
          this.arrUser[i] = this.userObj.copy();
        }
      }
    } else {
      console.log(this.userObj);
      this.userObj.id = ++this.id;
      this.arrUser.push(this.userObj.copy());
    }
    this.cancel();
  }

  cancel() {
    this.userObj.clear();
  }

  delete(val) {
    for (let i = 0; i < this.arrUser.length; i++) {
      if (this.arrUser[i] == val) {
        this.arrUser.splice(i, 1);
      }
    }
    this.cancel();
  }
}
