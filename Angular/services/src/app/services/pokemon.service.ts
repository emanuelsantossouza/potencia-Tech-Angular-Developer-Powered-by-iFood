import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environmnets/environmnet';
import { PokemonData } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = '';
  private pokeData!: PokemonData | any;


  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<PokemonData> {
    console.log(pokemonName);
    const constructorURL = `${this.baseURL}/${pokemonName}`
    this.pokeData = this.http.get<PokemonData>(constructorURL);

    return this.pokeData;
  }
}
