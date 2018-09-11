import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ChartComponent } from './main/chart/chart.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
