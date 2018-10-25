import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  getdata(): Observable<any> {
    return this.http
      .get("http://localhost:3000/list")
      .pipe(map(response => response));
  }
  savedata(obj: any): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/save", obj)
      .pipe(map(response => response));
  }

  updatedata(obj: any): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/update/" + obj.id, obj)
      .pipe(map(response => response));
  }
  deletedata(obj: any): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .delete("http://localhost:3000/delete/" + obj.id, obj)
      .pipe(map(response => response));
  }
}
