import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// 3-party
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ChartComponent } from './main/chart/chart.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
