import { Component, OnInit, Input } from '@angular/core';
import { BattleService } from './battle.service';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  public dateStartBattle: number;

  constructor(public battleService: BattleService, public pokemonService: PokemonService) {
  }

  ngOnInit(){
    forkJoin(
      this.pokemonService.getPokemon("pikachu"),
      this.pokemonService.getPokemon("mew")
    ).subscribe(
      ([firstPokemon, secondPokemon]) => {
        this.battleService.letTheBattleBeginAndFinish(firstPokemon, secondPokemon).subscribe(
          () => {},
          error => console.error('onError: %s', error),
          () => this.battleService.displayWinner()
        );
      }
    );
  }

  pauseGame(){
    if (!this.battleService.isStarted){
      this.dateStartBattle = Date.now();
      this.battleService.isStarted = true;
    }
    this.battleService.isPaused = !this.battleService.isPaused;
  }
}
