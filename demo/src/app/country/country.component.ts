import { CountryDataService } from "./../service/country-data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Country } from "../common/model/country";
import { Meta } from "@angular/platform-browser";
@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  countryObj: Country;
  arrCountry: Country[];
  id: any;
  arrPage: any[] = [];
  Datalength: number;

  pageno: number = 1;
  pagesize: number = 5;
  pagesearch: string = "";

  constructor(private meta: Meta,
    private countrydbservice: CountryDataService,
    private router: Router
  ) {
    this.countryObj = new Country();
    this.arrCountry = [];
    this.pagearray();
    this.getData(this.pagesearch, this.pageno, this.pagesize);
  }

  getData(_search, _pno, _psize) {


    let obj = { search: _search, pageno: _pno, limit: _psize }
    console.log("obj");
    console.log(obj);


    this.countrydbservice.pagedata(obj).subscribe(data => {

      console.log(data);
      this.arrCountry = data;


      // this.arrCountry = data;
    });
  }

  save() {
    this.countrydbservice
      .savedata({ name: this.countryObj.name })
      .subscribe(obj => {

        this.getData(this.pagesearch, this.pageno, this.pagesize);
      });
  }
  pagearray() {
    //console.log('pagearray');

    this.countrydbservice.getdata().subscribe(data => {
      // console.log("data");
      // console.log(data);
      this.Datalength = data;
      let totalpages = this.Datalength / this.pagesize;
      if ((this.Datalength % this.pagesize) > 0)
        totalpages++;

      for (let i = 1; i <= totalpages; i++) {
        this.arrPage.push(i);
      }

    });

    // this.countrydbservice.(this.arrPage).subscribe(obj => {
    //   console.log(obj);
    // });
  }
  search() {

    let obj = { search: this.pagesearch, limit: this.pagesize, pageno: this.pageno }
    this.countrydbservice.pagedata(obj).subscribe(data => {

      console.log(data);
      this.arrCountry = data;
      // this.arrCountry = data;
    });
  }

  edit(obj: Country) {
    console.log(obj);

    this.countryObj.name = obj.name;
    this.countryObj._id = obj._id;
    console.log(this.arrCountry);
  }
  Update() {
    console.log(this.countryObj);
    this.countrydbservice.updatedata(this.countryObj).subscribe(obj => {
      console.log(obj);
      this.getData(this.pagesearch, this.pageno, this.pagesize);
    });
  }
  delete(obj) {
    console.log("delete obj");
    console.log(obj);

    this.countrydbservice.deletedata(obj).subscribe(obj => {
      console.log(obj);
      this.getData(this.pagesearch, this.pageno, this.pagesize);
    });
  }

  ngOnInit() {
    if (this.meta.getTag('name="description"') == null) {
      this.meta.addTag({ name: "description", content: "Hello mean stack" })
    } else {
      this.meta.updateTag({ name: "description", content: "Hello mean stack" })
      // this.meta.removeTag('name="description"')
    }

  }


}
