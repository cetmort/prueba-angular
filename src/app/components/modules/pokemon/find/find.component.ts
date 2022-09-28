import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  public namePokemon : string = ''
  public image : string = ''
  public flag : boolean = false

  constructor(public pokemonService : PokemonService) { }

  ngOnInit(): void {
  }
  
  find(){
    if (this.namePokemon !== '') {
      this.flag = !this.flag;
      this.pokemonService.getName(this.namePokemon).subscribe((data : any) => {  
        this.image = data.sprites.front_default
        this.namePokemon = data.name
      })
    }
    
  }

}
