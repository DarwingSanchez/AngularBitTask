import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public userService: UserService,
    public router: Router
    ) {}

  confirmPasswor: string = ''

  ngOnInit(): void {}

  singup(form: NgForm) {
    if (
      !form.value.email ||
      !form.value.password ||
      !form.value.phone ||
      !form.value.username ||
      !form.value.lastName ||
      !this.confirmPasswor
    ) {
      alert('Alguno de los campos están vacíos')
    }else if(form.value.password != this.confirmPasswor){
      alert('Las contraseñas no coinciden')
      form.value.password = ''
      this.confirmPasswor = ''
    }else{
      this.userService.singUp(form.value)
      .subscribe( {
        next: data => {
          this.router.navigate(['/login'])
         },
        error: err => console.log('Error:', err)
      } )
    }
  }
}
