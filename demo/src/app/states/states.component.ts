import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CountryDataService } from "../service/country-data.service";

@Component({
  selector: "app-states",
  templateUrl: "./states.component.html",
  styleUrls: ["./states.component.css"]
})
export class StatesComponent implements OnInit {
  public id: string;
  public country: string;
  name: string;
  arrState:any[]=[];
  stateId:string="";
  

  constructor(
    private route: ActivatedRoute,
    private countrydbservice: CountryDataService
  ) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.country = params["name"];
      console.log(params);
      console.log(params["name"]);

    });
    this.getdata();
  }

  save() {
    this.countrydbservice.updateStateData(this.id, this.name).subscribe(obj => {
      console.log(obj);
      this.getdata();
    });
    this.clear();
  }
  edit(obj){
    console.log(obj);
    console.log(this.arrState);  
     this.name=obj.name;
    this.stateId=obj._id;
   
  }

  Update(){
    console.log(this.name);
    console.log(this.id);
    let obj={id:this.stateId,name:this.name}
    console.log(obj);
      this.countrydbservice.updateState(this.id, obj).subscribe(data => {
        console.log(data);
      this.getdata();
    });
    
  }

  delete(obj){
    console.log("delete obj");
    console.log(obj);
    let aa = { cid: this.id,sid:obj._id};
    this.countrydbservice.deleteStateData(aa).subscribe(obj => {
      console.log(obj);
      this.getdata();
    });
    
  }

  getdata(){
    console.log("getData");
    this.countrydbservice.getStateData(this.id).subscribe(data => {
      console.log("data");
      console.log(data);
      this.arrState = data[0].states;
  })
  }

  clear(){
    this.name="";
    
  }

  ngOnInit() {}
}
