import { Component, OnInit } from "@angular/core";
import { } from "@angular/platform-browser";
import { UserService } from "./service/user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {


  title = "demo";

  name: string;
  students: string[];

  constructor(private service: UserService) {
    this.name = "skm";
    this.students = [];
  }

  clickMe() {
    this.students.push(this.name);
    console.log(this.students);
  }
  ngOnInit() {
    this.getprofile();
  }
  getprofile() {
    this.service.getprofile().subscribe(data => {
      console.log("data");
      console.log(data);
    })
  }
  logout() {
    this.service.logout();
  }
}
