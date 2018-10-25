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

  //@profile
  getprofile(): Observable<any> {
    let token = localStorage.getItem('token');
    console.log(token);
    //
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any>("http://localhost:3000/auth/user/me", httpOptions)
      .pipe(
        map(response => response)
      )
  }


  //@logout
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
