import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday=new Date(1988,3,15);
  constructor() { }

toggle:boolean=true;
money=400.99;
a:number=0.259;
b:number=1.3495;
name='techlearning';




get format() {
  return this.toggle?'shortDate':'fullDate';
}
toggleFormat(){
  this.toggle=!this.toggle;
}



  ngOnInit() {
  }

}
