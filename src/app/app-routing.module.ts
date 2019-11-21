import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LancamentosComponent} from './lancamentos/lancamentos.component';
import{HomeComponent} from './home/home.component';
import { from } from 'rxjs';


const routes: Routes = [
 {
    path: 'lancamentos',
    component: LancamentosComponent
  },
 {
    path: 'lancamentos',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
