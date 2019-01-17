import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiurl } from 'src/environments/apiservice';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  msg: any;
  tmp: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get(`${apiurl}/gcUnit/myinfo`, httpOptions)
    .subscribe(res => {
      this.msg = res;
      console.log(this.msg);
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['/']);
      }
    });

  }
}
