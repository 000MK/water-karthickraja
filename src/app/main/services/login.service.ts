import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url:any

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.Url = 'https://auth-api-92hj.onrender.com';
  }

  logCheck(loginForm:FormGroup) {
    return this.http.post(this.Url + '/user/auth', {
      email : loginForm.value.email,
      password : loginForm.value.password,
    }).subscribe((response: any) => {
       if (response.status == 200) {
        localStorage.setItem('user',response.email)
        this.router.navigate(['dashboard'])
       } else if (response.status == 403) {
         alert('UserName Or Password is Incorrect')
         loginForm.reset()
       }
    })
  }
}
