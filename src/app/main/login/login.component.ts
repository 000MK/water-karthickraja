import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  loginForm:any

  constructor(
    private form: FormBuilder,
    private router: Router,
    private logService : LoginService
  ) { 
    
  }

  ngOnInit():void {
    this.loginForm = this.form.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
    });
  }

  onSubmit(){
    this.logService.logCheck(this.loginForm);
  }
  
}
