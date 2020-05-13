import { Pokemon } from '../pokemon/pokemon';
import { Injectable } from '@angular/core';
import {PokemonService} from '../pokemon/pokemon.service';

@Injectable()
export class BattleService {
  public firstPokemon: Pokemon;
  public secondPokemon: Pokemon;
  public winner = null;
  public messageList: string[] = [];
  public isPaused = true;
  public isStarted = false;

  constructor(private pokemonService: PokemonService) {
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

  round(): void{
    
    setTimeout(() => {
      if (this.isPaused) {
        this.round();
        return;
      }

      const attacker = this.getFastest();
      const defender = attacker === this.firstPokemon ? this.secondPokemon : this.firstPokemon;
      this.messageList.push(this.pokemonService.attack(attacker, defender));
      if (this.pokemonService.isKo(defender)){
        this.displayWinner(attacker);
        return;
      }

      this.messageList.push(this.pokemonService.attack(defender, attacker));
      if (this.pokemonService.isKo(attacker)){
        this.displayWinner(defender);
        return;
      }

      this.round();
    }, 1000);
  }

  displayWinner(theWinner: Pokemon){
    this.winner = theWinner;
    this.messageList.push('And the winner is ...');
    this.messageList.push(this.winner.name);
  }

  letTheBattleBeginAndFinish(): void{
    this.messageList.push('The battle between ' + this.firstPokemon.name + ' and ' + this.secondPokemon.name + ' begins !\n');

    this.round();
  }
}
