import { User } from './../Models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "https://localhost:5001/api/";
  private currentuserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentuserSource.asObservable();

  constructor(private http: HttpClient,private router: Router) { }
  userlogin(model: any) {
    return this.http.post(this.baseUrl + "Auth/Login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.setcurrentuser(user);
        }
      })
    )
  }
  setcurrentuser(user: User) {
    this.currentuserSource.next(user);
  }
  logout() {
    this.currentuserSource.next(null);
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
  register(model: any) {
    return this.http.post(this.baseUrl + "Auth/Register", model)
  }
}
