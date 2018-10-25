import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-store-img-in-db',
  templateUrl: './store-img-in-db.component.html',
  styleUrls: ['./store-img-in-db.component.css']
})
export class StoreImgInDbComponent implements OnInit {
  arrTable: any[] = [];
  name: string;
  price: string;
  filename: string;
  imageData: string;
  uploadImg: any;
  avtar: any = {};

  constructor(private imageService: ImageService) {
    this.getData();
  }

  getData() {
    this.imageService.getdata().subscribe(data => {
      console.log(data);
      this.arrTable = data;
      console.log("arrtable");
      console.log(this.arrTable);
    });
  }

  fileChange(event) {
    //this._file = event.target.files[0];

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avtar = {
          filename: file.name,
          filetype: file.type,
          blobdata: reader.result.split(',')[1]
        };

        this.imageData = 'data:' + this.avtar.filetype + ';base64,' + this.avtar.blobdata;
        console.log("imageData");
        console.log(this.imageData);


      }
    }
  }

  save() {

    let obj = {
      name: this.name,
      price: this.price,
      avtar: this.avtar
    }
    console.log("avtar");
    console.log(obj.avtar);


    this.imageService.savedata(obj).subscribe(obj => {
      console.log(obj);
    });
  }

  ngOnInit() {
  }

}
