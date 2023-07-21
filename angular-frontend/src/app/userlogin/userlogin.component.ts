import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
    username: string = '';
    password: string = '';
    errorMessage: string = '';
  
    constructor(private router: Router) {}
  
    login(): void {
  
      if (this.username === 'user' && this.password === 'password') {
       
        this.router.navigate(['/userdashboard']);
      } 
      else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  
  
    ngOnInit(): void {
    }
  
  }




