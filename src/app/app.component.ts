import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root', // permet de definir le nom de la balise html
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{ // le mot export vas permettre d'importer la classe dans d'autres fichiers
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
      console.table(this.pokemonList);
      this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemonName: Pokemon){
      console.log(`Vous avez cliquer sur le pokemon ${pokemonName.name}`);
  }
}
