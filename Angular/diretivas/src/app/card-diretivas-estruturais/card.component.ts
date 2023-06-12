import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'user';
  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'font',
    ]
  }

  adicionar() {
    this.produtos.push('Emanuel');
  }
  remover() {
    this.produtos.pop();
  }
  pegarIdERemove(index:number) {
    this.produtos.splice(index, 1) // remove itens a partir do numero 0 do index
  }

  torneseAdmin() {
    this.menuType = 'admin'
  }

  torneseSuperusuario() {
    this.menuType = 'superuser'
  }
}
