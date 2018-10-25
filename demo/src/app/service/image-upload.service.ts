import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }

  //@save data with img
  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/imageupload/save", obj)
      .pipe(map(response => response));
  }

  //@getData
  getdata(): Observable<any> {
    return this.http
      .get("http://localhost:3000/imageupload/list")
      .pipe(map(response => response));
  }

  //@deleteData
  deletedata(obj: any): Observable<any> {
    return this.http
      .delete(
        "http://localhost:3000/imageupload/delete/" + obj._id,
        obj
      )
      .pipe(map(response => response));
  }
}
