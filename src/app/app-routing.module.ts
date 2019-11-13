import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LancamentosComponent} from './lancamentos/lancamentos.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppComponent
  },

  {
    path: 'index',
    component: AppComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
