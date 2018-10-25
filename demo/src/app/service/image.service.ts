import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  //@save data with img
  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/image/save", obj)
      .pipe(map(response => response));
  }

  //@getData
  getdata(): Observable<any> {
    return this.http
      .get("http://localhost:3000/image/list")
      .pipe(map(response => response));
  }
}
