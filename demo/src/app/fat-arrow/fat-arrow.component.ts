import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fat-arrow',
  templateUrl: './fat-arrow.component.html',
  styleUrls: ['./fat-arrow.component.css']
})
export class FatArrowComponent implements OnInit {

  data=['green','red','yellow'];
  even=[2,4,6,8];
  odd:any[]
  
 
  

  constructor() {
    // this.data.forEach((val) => console.log(val))
    // this.data.forEach(function (val){ console.log(val) });
    // this.data.forEach(line=>console.log(line.toUpperCase()));
    this.odd=this.even.map(v=>v+1)
    console.log(this.odd)
    for (const index in this.data) {
     console.log(index);
     
    }
    for (const index of this.data) {
      console.log(index);
      
    }
    
    
    
    

    }

  ngOnInit() {
  }



}
