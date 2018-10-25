import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}
  //@save data with img
  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/product/upload", obj)
      .pipe(map(response => response));
  }

  //@getData
  getdata(): Observable<any> {
    return this.http
      .get("http://localhost:3000/product/table")
      .pipe(map(response => response));
  }

  //@deleteData
  deletedata(obj: any): Observable<any> {
    return this.http
      .delete(
        "http://localhost:3000/product/delete/" + obj._id,
        obj
      )
      .pipe(map(response => response));
  }

  //@updateData
  updatedata(id,obj: any): Observable<any> {
    return this.http
      .put("http://localhost:3000/product/update/" + id, obj)
      .pipe(map(response => response));
  }
}
