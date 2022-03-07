import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  API_URL = `${environment.API_URL}/users`

  private token: boolean = localStorage.getItem('auth_token') ? true : false

  private checkLogin = new BehaviorSubject(this.token)
  checkLogin$ = this.checkLogin.asObservable()

  constructor(
    private http: HttpClient,
  ) {
    this.selectedUser = new User
   }


   login(credentials: any){
     return this.http.post(`${this.API_URL}/login`, credentials)
   }

   checkLoginFn(state: boolean){
      this.checkLogin.next(state)
   }

   logOut(){
     localStorage.removeItem('auth_token')
   }

   getAllUsers(){
     return this.http.get<User[]>(`${this.API_URL}/get-users`);
   }
   getOneUser(id: number){
     return this.http.get(`localhost:5200/get-OneUser/${id}`)
   }

   singUp(body: any){
    return this.http.post(`${this.API_URL}/create-user/`, body)
   }

   getToken(){
     return localStorage.getItem('auth_token')
   }

   decodeToken(){
    try {
      let token = String(localStorage.getItem('auth_token'))
      return jwt_decode(token)
    } catch (err) {
      return null
    }
  }
}
