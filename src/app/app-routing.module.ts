import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ChartComponent } from './main/chart/chart.component';

const approutes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'main', component: MainComponent,
    children: [
      {path: '', component: DashboardComponent, outlet: 'main'},
      {path: 'dashboard', component: DashboardComponent, outlet: 'main'},
      {path: 'chart', component: ChartComponent, outlet: 'main'}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(approutes, { enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
