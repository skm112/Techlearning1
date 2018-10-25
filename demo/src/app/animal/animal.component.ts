import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"]
})
export class AnimalComponent implements OnInit {
  name: string;
  arrAnimal: any[];
  id: number = 0;
  updateID: number = 0;

  constructor() {
    this.name = "";
    this.arrAnimal = [];
  }

  //--------------------------------------------------------------------
  delete(str) {
    for (let i = 0; i < this.arrAnimal.length; i++) {
      if (this.arrAnimal[i] == str) {
        this.arrAnimal.splice(i, 1);
      }
    }
  }
  //-------------------------------------------------------------
  edit(str) {
    this.name = str.name;
    this.updateID = str.id;
  }
  //----------------------------------------------------------------------
  addUpdate() {
    if (this.updateID > 0) {
      for (let i = 0; i < this.arrAnimal.length; i++) {
        if (this.arrAnimal[i].id == this.updateID) {
          this.arrAnimal[i].name = this.name;
          this.updateID = 0;
        }
      }
    } else {
      this.arrAnimal.push({ id: ++this.id, name: this.name });
    }
    this.name = "";
  }
  //-----------------------------------------------------------------
  ngOnInit() {}
}
