import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    private router :Router
  ) {
    if (!localStorage.getItem('user')) {
     this.router.navigate([''])
    } else {
    this.router.navigate(['/dashboard'])
   }
  }

  ngOnInit() {
    
  }

  logOut() {
    localStorage.removeItem("user");
    this.router.navigate([''])
  }

}
