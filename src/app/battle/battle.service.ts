import { Pokemon } from '../pokemon/pokemon';
import { Injectable } from '@angular/core';
import {PokemonService} from '../pokemon/pokemon.service';
import { BattleLogService } from '../battle-log/battle-log.service';
import {interval, Observable} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';

@Injectable()
export class BattleService {
  public firstPokemon: Pokemon;
  public secondPokemon: Pokemon;
  public isPaused = true;
  public isStarted = false;
  public winner: Pokemon;

  constructor(private pokemonService: PokemonService, private battleLogService: BattleLogService) {}

  public getFastest(random = Math.random()): Pokemon {
    if (this.pokemonService.isFastest(this.firstPokemon, this.secondPokemon)) {
      return this.firstPokemon;
    } else if (this.pokemonService.isFastest(this.secondPokemon, this.firstPokemon)) {
      return this.secondPokemon;
    } else {
      if (Math.round(random) % 2 === 1) {
        return this.firstPokemon;
      }
      return this.secondPokemon;
    }
  }

  rounds(attacker: Pokemon, defender: Pokemon): boolean {

      this.pokemonService.attack(attacker, defender);
      this.battleLogService.pushAttackMessage(attacker, defender, attacker.atk);

      if (this.pokemonService.isKo(defender)){
        this.winner = attacker;
        return true;
      }
      return false;
  }

  displayWinner() {
    this.battleLogService.pushMessage('And the winner is ...');
    this.battleLogService.pushMessage(this.winner.name);
  }

  letTheBattleBeginAndFinish(firstPokemon: Pokemon, secondPokemon: Pokemon): Observable<boolean> {
    this.firstPokemon = firstPokemon;
    this.secondPokemon = secondPokemon;
    this.battleLogService.pushMessage('The battle between ' + this.firstPokemon.name + ' and ' + this.secondPokemon.name + ' begins !\n');

    let attacker = this.getFastest();
    let defender = attacker === this.firstPokemon ? this.secondPokemon : this.firstPokemon;

    return interval(1000)
      .pipe(
        map(() => {
          if (!this.isPaused) {
            const isWinner = this.rounds(attacker, defender);
            [attacker, defender] = [defender, attacker];
            return isWinner;
          }
        }),
        takeWhile(isWinner => {
          return !isWinner;
        })
      );
  }
}
