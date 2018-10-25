import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fruits",
  templateUrl: "./fruits.component.html",
  styleUrls: ["./fruits.component.css"]
})
export class FruitsComponent implements OnInit {
  // arrFruits: string[];
  arrFruits1: any[];
  name: string;
  id: number = 0;
  updateID: number = 0;

  constructor() {
    //this.arrFruits = [];
    this.arrFruits1 = [];
    this.name = "";
  }

  //--------------------------
  // addFruit() {
  //   this.arrFruits.push(this.name);
  //   this.name = "";
  //   console.log(this.arrFruits);
  // }
  //-----------------------
  // delete(val) {
  //   for (let i = 0; i < this.arrFruits.length; i++) {
  //     if (this.arrFruits[i] == val) {
  //       this.arrFruits.splice(i, 1);
  //     }
  //   }
  // }

  //------------------------

  addFruit1() {
    this.arrFruits1.push({ id: ++this.id, name: this.name });
    this.name = "";
    //console.log(this.arrFruits1);
  }
  //--------------------
  edit(val) {
    console.log(val);

    this.name = val.name;
    this.updateID = val.id;
  }
  //-------------------
  updateFruit() {
    for (let i = 0; i < this.arrFruits1.length; i++) {
      if (this.arrFruits1[i].id == this.updateID) {
        this.arrFruits1[i].name = this.name;
        this.name="";
        this.updateID=0;
        console.log(this.updateID);
        
        
      }
    }
  }
  
  
  //----------------------------
  delete1(val) {
    for (let i = 0; i < this.arrFruits1.length; i++) {
      if (this.arrFruits1[i] == val) {
        this.arrFruits1.splice(i, 1);
      }
    }
  }

  ngOnInit() {}
}
