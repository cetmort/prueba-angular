import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private url : string = 'https://pokeapi.co/api/v2/pokemon'

  constructor( private http : HttpClient ) { } 
  
  getName(namePokemon : string){
    return this.http.get(`${this.url}/${namePokemon}`)
  }

  listPokemont(idPokemon : number){
    return this.http.get<any>(`${this.url}/${idPokemon}`)
  }

}
