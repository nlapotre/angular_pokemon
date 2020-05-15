import { Component, OnInit } from '@angular/core';
import { PokemonDisplay } from '../pokemon/pokemonDisplay.class';
import { PokemonService } from '../pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  firstPokemonList: PokemonDisplay[] = [];
  secondPokemonList: PokemonDisplay[] = [];
  firstPokemonName: string;
  secondPokemonName: string;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(
      (res) => {
        this.firstPokemonList = res;
        this.secondPokemonList = res;
      },
      (error) => console.error('onError: %s', error),
    );
  }

  selectFirstPokemon(pokemonName): void{
    this.firstPokemonName = pokemonName;
  }

  selectSecondPokemon(pokemonName): void{
    this.secondPokemonName = pokemonName;
  }

  checkIfPokemonSelected(): boolean{
    return this.firstPokemonName === undefined || this.secondPokemonName === undefined;
  }

  launchBattle(): void {
    this.router.navigate(['/battle/' + this.firstPokemonName + '/' + this.secondPokemonName]);
  }
}
