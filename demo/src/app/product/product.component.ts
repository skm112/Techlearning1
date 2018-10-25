import { ProductService } from "./../service/product.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  _file = new File([""], "");
  arrTable: any[] = [];
  link: string = "";
  url: string = "http://localhost:3000/";
  arrEdit: any[] = [];
  icon: boolean = false;
  imageData: string = "";
  constructor(
    private ProductService: ProductService,
    private builder: FormBuilder
  ) {
    this.getData();
  }

  filename = new FormControl(null);
  name = new FormControl(null);
  price = new FormControl(null);
  uploadForm: FormGroup = this.builder.group({
    filename: this.filename,
    name: this.name,
    avtar: null,
    price: this.price,
    _id: new FormControl(null),
    pic: new FormControl(null)
  });

  fileChange(event) {
    this._file = event.target.files[0];

    // let reader = new FileReader();
    // if (event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.uploadForm.get('avtar').setValue({
    //       filename: file.name,
    //       filetype: file.type,
    //       blobdata: reader.result.split(',')[1]
    //     });

    //     this.imageData = 'data:' + this.uploadForm.get('avtar').value.filetype + ';base64,' + this.uploadForm.get('avtar').value.blobdata;
    //     console.log("imageData");
    //     console.log(this.imageData);


    //   }
    // }
  }

  save() {
    const formData = new FormData();
    formData.append("uploads[]", this._file, this._file.name);
    formData.append("name", this.uploadForm.value.name);
    formData.append("price", this.uploadForm.value.price);
    formData.append("pic", this.uploadForm.value.pic);
    console.log("formData");
    console.log(formData);
    let id = this.uploadForm.value._id;
    if (id == null) {
      console.log("Save");

      this.ProductService.savedata(formData).subscribe(obj => {
        console.log("obj");

        console.log(obj);
        this.getData();
        this.uploadForm.reset();
        this.icon = false;
      });
    } else {
      console.log("update");
      this.ProductService.updatedata(id, formData).subscribe(obj => {
        console.log(obj);
        this.getData();
        this.uploadForm.reset();
        this.link = "";
        this.icon = false;
      });
    }
  }

  getData() {
    this.ProductService.getdata().subscribe(data => {
      console.log(data);
      this.arrTable = data;
      console.log("arrtable");
      console.log(this.arrTable);
    });
  }

  delete(obj) {
    console.log("delete obj");
    console.log(obj);

    this.ProductService.deletedata(obj).subscribe(obj => {
      console.log(obj);
      this.getData();
      this.icon = false;
    });

    this.link = "";
  }

  edit(obj) {
    this.uploadForm.patchValue(obj);
    this.link = obj.pic;
    this.icon = true;
  }
  ngOnInit() { }
}
