import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../service/image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  show: boolean = false;
  arrUp: any[] = [{ type: "Aadhar", imagedata: "", avtar: {} }, { type: "Votie", imagedata: "", avtar: {} }, { type: "Lic", imagedata: "", avtar: {} }]
  arrTable: any[] = [];
  constructor(private imageUploadService: ImageUploadService) {
    this.getData();
  }

  fileChange(event, name) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        for (let i = 0; i < this.arrUp.length; i++) {
          if (this.arrUp[i].type == name) {
            this.arrUp[i].avtar = {
              filename: file.name,
              filetype: file.type,
              blobdata: reader.result.split(',')[1]
            };
            this.arrUp[i].imagedata = 'data:' + this.arrUp[i].avtar.filetype + ';base64,' + this.arrUp[i].avtar.blobdata;
            this.show = true;

          }

        }


      }
    }

  }



  save() {
    let obj = { docs: this.arrUp };
    this.imageUploadService.savedata(obj).subscribe(obj => {
      console.log(obj);
    });
    this.arrUp.splice(0, this.arrUp.length);
    this.show = true;
    console.log("arr");
    console.log(this.arrUp);
    this.getData();
  }

  getData() {
    this.imageUploadService.getdata().subscribe(data => {
      console.log(data);
      this.arrTable = data;
      console.log("arrtable");
      console.log(this.arrTable);
    });
  }

  delete(obj) {
    console.log("delete obj");
    console.log(obj);
    this.imageUploadService.deletedata(obj).subscribe(obj => {
      console.log(obj);
      this.getData();
    });
  }

  ngOnInit() {
  }

}
