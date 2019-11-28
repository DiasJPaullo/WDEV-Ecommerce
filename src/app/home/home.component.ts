import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos;

  constructor() {
    this.produtos = [
      new Produto('Caneta',10,'http://encurtador.com.br/ilDOV'),
      new Produto('Caderno',15,'http://encurtador.com.br/cmoIX'),
      new Produto('Caneca',5,'http://encurtador.com.br/cmyG5'),
      new Produto('Carteira',80,'http://encurtador.com.br/ISY67'),

    ];
   }

  ngOnInit() {
  }

}
