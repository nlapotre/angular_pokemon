import { Component, OnInit, Input } from '@angular/core';
import { BattleService } from './battle.service';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  public dateStartBattle: number;

  constructor(public battleService: BattleService, public pokemonService: PokemonService, public route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params
    .pipe(
      filter(params => params.name1),
      mergeMap((params) => {
        return forkJoin(
          this.pokemonService.getPokemon(params.name1),
          this.pokemonService.getPokemon(params.name2)
        );
      })
    )
    .subscribe(
      ([firstPokemon, secondPokemon]) => {
        console.log(firstPokemon, secondPokemon)
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
