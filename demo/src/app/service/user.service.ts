import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //@save data 
  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/auth/user/signup", obj)
      .pipe(map(response => response));
  }

  //@login
  signin(obj: any): Observable<boolean> {
    return this.http.post<any>('http://localhost:3000/auth/user/signin', obj)
      .pipe(
        map(user => {
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', user.token);
          }

          return user;
        })
      );
  }
  //@header
  headerFun() {
    let token = localStorage.getItem('token');
    // console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return httpOptions;
  }


  //@profile
  getprofile(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/auth/user/me", this.headerFun())
      .pipe(
        map(response => response)
      )
  }

  //@resetpassword
  resetPass(obj: any): Observable<any> {
    return this.http.put("http://localhost:3000/auth/user/reset/password", obj, this.headerFun())
      .pipe(map(response => response))
  }


  //@logout
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
