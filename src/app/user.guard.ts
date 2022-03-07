import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/userService/user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
  ){

  }

  canActivate() {
    if(this.userService.getToken()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
