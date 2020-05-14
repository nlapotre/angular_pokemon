import { Pokemon } from '../pokemon/pokemon';
import { Injectable } from '@angular/core';
import {PokemonService} from '../pokemon/pokemon.service';
import { BattleLogService } from '../battle-log/battle-log.service';

@Injectable()
export class BattleService {
  public firstPokemon: Pokemon;
  public secondPokemon: Pokemon;
  public isPaused = true;
  public isStarted = false;

  constructor(private pokemonService: PokemonService, private battleLogService: BattleLogService) {
    this.firstPokemon = new Pokemon('tortank', 10);
    this.secondPokemon = new Pokemon('magicarpe', 100);
  }

  public getFastest(random = Math.random): Pokemon {
    if (this.pokemonService.isFastest(this.firstPokemon, this.secondPokemon)) {
      return this.firstPokemon;
    } else if (this.pokemonService.isFastest(this.secondPokemon, this.firstPokemon)) {
      return this.secondPokemon;
    } else {
      if (Math.round(random()) % 2 === 1) {
        return this.firstPokemon;
      }
      return this.secondPokemon;
    }
  }

  rounds(callback: (self: BattleService, pokemon: Pokemon)=>void): void{

    let attacker = this.getFastest();
    let defender = attacker === this.firstPokemon ? this.secondPokemon : this.firstPokemon;

    let attack = setInterval(() => {
      if (!this.isPaused) {
        this.pokemonService.attack(attacker, defender);
        this.battleLogService.pushAttackMessage(attacker, defender, attacker.atk);
        
        if (this.pokemonService.isKo(defender)){
          callback(this, attacker);
          clearInterval(attack);
        } else {
          [attacker, defender] = [defender, attacker];
        }
      }
    }, 1000);
  }

  displayWinner(self: BattleService, theWinner: Pokemon){
    self.battleLogService.pushMessage('And the winner is ...');
    self.battleLogService.pushMessage(theWinner.name);
  }

  letTheBattleBeginAndFinish(): void{
    this.battleLogService.pushMessage('The battle between ' + this.firstPokemon.name + ' and ' + this.secondPokemon.name + ' begins !\n');
    
    this.rounds(this.displayWinner);
  }
}
