import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  state: string;
  city: string;
  phone: number;
  arrUsers: any[];
  id:number=0;
  updateID:number=0;
  status:boolean;
  arrCountryCode=['US','UK','IN','CH'];
  currentCountry='US';

  constructor() {
    this.name = "";
    this.state = "";
    this.city = "";
    this.phone=null;
    this.arrUsers = [];
    this.status=true;
  }
  //-------------------------------------------------
  onSelectChange(val){
    this.currentCountry=val
  }
  onSelectChange1(val){
    this.status=val;
  }
  //-------------------------------------------------
  edit(val) {
    this.name=val.name;
    this.state=val.state;
    this.city=val.city;
    this.phone=val.phone;
    this.updateID=val.id;
  }
  //-------------------------------------------------
  delete(val) {
    for (let i = 0; i < this.arrUsers.length; i++) {
      if (this.arrUsers[i] == val) {
        this.arrUsers.splice(i, 1);
      }
    }
    this.name = "";
    this.state = "";
    this.city = "";
    this.phone = null;
    this.updateID = 0;
  }
  //-----------------------------------------------------
  saveUpdate() {
if (this.updateID>0) {
  for (let i = 0; i < this.arrUsers.length; i++) {
    if(this.arrUsers[i].id==this.updateID){
    this.arrUsers[i].name=this.name;
    this.arrUsers[i].state=this.state;
    this.arrUsers[i].city=this.city;
    this.arrUsers[i].phone=this.phone;}
  
} }else {
  this.arrUsers
  .push({id:(++this.id),
    name:this.name,
    state:this.state,
    city:this.city,
    phone:this.phone});
  
}
console.log(this.arrUsers);

    this.name = "";
    this.state = "";
    this.city = "";
    this.phone=null;

}
//-------------------------------------------------
cancel(){
  this.name = "";
  this.state = "";
  this.city = "";
  this.phone = null;
  this.updateID=0;
}

  

  //-----------------------------------------------------
  

  ngOnInit() {}
}
