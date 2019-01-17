import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { apiurl } from 'src/environments/apiservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tmp: any;
  source: LocalDataSource;
  settings = {
    // hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: '',
      position: 'right'
      },
      add: {
      addButtonContent: '',
      },
    region: {
      class: 'wide'
    },
    columns: {
      도서명: {
        title: '도서명'
      },
      서점명: {
        title: '서점명'
      },
      매출부수: {
        title: '판매부수'
      },
      매출금액: {
        title: '매출금액'
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  constructor(private http: HttpClient) {   }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get(`${apiurl}/gcUnit/editorpay`, httpOptions)
    .subscribe(res => {
      this.tmp = res;
      this.source = new LocalDataSource(this.tmp);
      console.log(this.source);
    }, err => {
      console.log(err);
    });
  }

}
