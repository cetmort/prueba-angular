import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  public namePokemon : string = ''
  public namePokemonTwo : string = ''
  public image : string = ''
  public imageTwo : string = ''
  public liveOne : number = 100
  public liveTwo : number = 100
  public MENSAJE : string = ''
  public MENSAJE2 : string = ''
  public flags : any[] = [false,false] 
  
  @ViewChild('energy', {read : ElementRef}) energy!: ElementRef;
  @ViewChild('energyOne', {read : ElementRef}) energyOne!: ElementRef;

  constructor(public pokemonService : PokemonService, private renderer : Renderer2) { 

  }

  ngOnInit(): void {
  }

  playerOne(){
    if(this.namePokemon !== ''){
      this.flags[0] = !this.flags[0];
      this.pokemonService.getName(this.namePokemon).subscribe((data : any) => {   
        this.image = data.sprites.front_default
        this.namePokemon = data.name
      })
    }
  }

  playerTwo(){
    if(this.namePokemonTwo !== ''){
      this.flags[1] = !this.flags[1];
      this.pokemonService.getName(this.namePokemonTwo).subscribe((data : any) => {
        this.imageTwo = data.sprites.front_default
        this.namePokemonTwo = data.name
      })
    }
  }

  attack(){
    if (this.liveTwo > 0) {
      this.liveTwo = this.liveTwo - Math.trunc(Math.random()*40)
      this.renderer.setStyle(this.energyOne.nativeElement, 'width', this.liveTwo+'%')
      this.renderer.setStyle(this.energyOne.nativeElement, 'transition', '2s')
      if (this.liveTwo < 0) {
        this.MENSAJE = 'ganador'
        this.MENSAJE2 = 'Perdedor'
      }
    }
  }

  attackTwo(){
    if (this.liveOne > 0) {
      this.liveOne = this.liveOne - Math.trunc(Math.random()*40)
      this.renderer.setStyle(this.energy.nativeElement, 'width', this.liveOne+'%')
      this.renderer.setStyle(this.energy.nativeElement, 'transition', '2s')
      if (this.liveOne < 0) {
        this.MENSAJE2 = 'ganador'
        this.MENSAJE = 'perdedor'
      }
    }
  }

}
