import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(): void {

    if (this.username === 'admin' && this.password === 'password') {
     
      this.router.navigate(['/employees']);
    } 
    else {
      this.errorMessage = 'Invalid username or password';
    }
  }


  ngOnInit(): void {
  }

}
