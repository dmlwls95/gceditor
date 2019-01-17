import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiurl } from '../../environments/apiservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  apiUrl = 'http://localhost:4000/gcUnit';

  loginForm: FormGroup;
  submitted = false;
  loginData = { username: '', password: '' };
  message = '';
  data: any;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;

    this.http.post(`${apiurl}/gcUnit/login`, this.loginData)
    .subscribe(res => {
      this.data = res;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['main']);
    });

  }
}
