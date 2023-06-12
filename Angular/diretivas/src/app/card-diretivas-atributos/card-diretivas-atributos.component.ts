import { Component } from '@angular/core';

@Component({
  selector: 'app-card-diretivas-atributos',
  templateUrl: './card-diretivas-atributos.component.html',
  styleUrls: ['./card-diretivas-atributos.component.css']
})
export class CardDiretivasAtributosComponent {
  estilo: string = 'enable'
  corFundo: string = 'red'
  item: string =''
  listaCarrinho: string[] = [];
  isEnableBlock: boolean = false;
  constructor() { }

  trocarCor() {
    if (this.estilo === 'enable') {
      this.estilo = 'disable';
    } else {
      this.estilo ='enable'
    }
  }

  addList() {
    this.listaCarrinho.push(this.item);
    this.item = '';
    this.isEnableBlock = true;
  }
}
