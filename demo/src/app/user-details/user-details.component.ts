import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>{console.log(params['id']);
    })
  }

  ngOnInit() {
  }

}
