import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gethttpservice',
  templateUrl: './gethttpservice.component.html',
  styleUrls: ['./gethttpservice.component.css']
})
export class GethttpserviceComponent implements OnInit {

  name: string;
  id: number;
  arr: any[];
  constructor(private dbservice:DataService) {
    this.id=null;
    this.name='';
    this.arr=[];
    this.getdata();
    console.log(this.arr);
   }
  getdata(){
    this.dbservice.getdata().subscribe(data=>{
    console.log(data);
    this.arr=data;
    });
  }

  editData(obj:any){
    console.log(obj);
   this.id=obj.id;
   this.name=obj.name;
  }
  saveData1() {
   
    let obj = { id: this.id, name: this.name }
    this.dbservice.savedata(obj).subscribe(obj => {
      console.log(obj);
      this.getdata();
      this.cancel();
    });
  }
  cancel(){
    this.id = null;
    this.name = "";
  }
  updateData(){
    let obj = { id: this.id, name: this.name };
    this.dbservice.updatedata(obj).subscribe(obj=>{
      console.log(obj);
      this.getdata();
    })
    this.cancel();
  }
  deleteData(obj:any){
    console.log(obj);
    this.dbservice.deletedata(obj).subscribe(obj=>{
      console.log(obj);
      this.getdata();
    })
    this.cancel();
  }

  ngOnInit() {
  }

}
