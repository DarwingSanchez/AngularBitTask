import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    public userService: UserService,
    public router: Router
    ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    try {
      if (!form.value.email || !form.value.password) {
        throw new Error('Uno o mas campos están vacíos');
      }
        this.userService.login(form.value)
        .subscribe( {
          next: (data: any) => {
              localStorage.setItem('auth_token', data.response)
              this.userService.checkLoginFn(true)
              this.router.navigate(['home'])
          },
          error: error =>{
            switch (error.error.Error) {
              case 'Invalid Credentials':
                alert('El correo o la contraseña es invalida')
                break;
              case 'The user doesnt exist':
                alert('El usuario no lo encontramos')
                break;
              case 'There is an empty field':
                alert('Algun campo esta vacío')
                break;

              default: alert('A habido un error, intente más tarde')
                break;
            }
            console.log(error.error.Error)
          }
        } )
    } catch (error) {
      alert(error);
    }
  }
}

/* nicolas@sanchez.com */
