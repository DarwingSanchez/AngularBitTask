import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  token: Boolean = false;
  tokenString: string =  ''
  decoded: any

  person = {
    username: '',
    profilePicture:
      '',
  };

  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit(): void {
    this.userService.checkLogin$.subscribe( data => {
      this.token = data
      if(this.token){
        this.decoded = this.userService.decodeToken()
      }
    } )
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['home']);
  }
}
