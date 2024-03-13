import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromiseSampleComponent } from "./promise-sample/promise-sample.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar'} },
      { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica #1'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de Cuenta'} },
      { path: 'promise', component: PromiseSampleComponent, data: { title: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs'} },
    ]
  }
]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [],
  declarations: [],
} )
export class PagesRoutingModule {
}
