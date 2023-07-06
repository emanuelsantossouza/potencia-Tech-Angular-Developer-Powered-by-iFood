import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  namePokemon: string = 'Charmander'
  photoPokemon: string = '';
  attributesTypes:string[] = ['FIRE', 'ROCK']
  constructor(){}
}
