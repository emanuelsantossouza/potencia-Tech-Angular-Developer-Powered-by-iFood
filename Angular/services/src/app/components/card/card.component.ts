import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonData, types } from '../../models/pokemon'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon?: PokemonData;
  namePokemon: string = 'Charmander'
  photoPokemon: string = '';
  pokemonId: number = 0;
  attributesTypes: types[] = [];

  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon('bulbasaur').subscribe(
      {
        next: (dadosPokemon) => {
          this.pokemon = {
            id: dadosPokemon.id,
            name: dadosPokemon.name,
            sprites: {
              front_default: dadosPokemon.sprites.front_default,
            },
            types: dadosPokemon.types
          }
        },
        error: (error) => console.log(error)
      }
    )
  }

  getPokemon(searchName: string) {
      this.pokemonService.getPokemon(searchName).subscribe(
      {
        next: (dadosPokemon) => {
          this.pokemon = {
            id: dadosPokemon.id,
            name: dadosPokemon.name,
            sprites: {
              front_default: dadosPokemon.sprites.front_default,
            },
            types: dadosPokemon.types
          }
        },
        error: (error) => console.log(error)
      }
    )
  }
}
