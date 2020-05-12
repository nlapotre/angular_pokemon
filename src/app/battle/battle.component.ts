import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  public firstPokemon: PokemonComponent;
  public secondPokemon: PokemonComponent;
  public winner = null;

  constructor(firstPokemon: PokemonComponent, secondPokemon: PokemonComponent) {
    this.firstPokemon = firstPokemon;
    this.secondPokemon = secondPokemon;
  }

  ngOnInit(): void {
  }

  public getFastest(random = Math.random): PokemonComponent {
    if (this.firstPokemon.isFastest(this.secondPokemon)) {
      return this.firstPokemon;
    } else if (this.secondPokemon.isFastest(this.firstPokemon)) {
      return this.secondPokemon;
    } else {
      if (Math.round(random()) % 2 === 1) {
        return this.firstPokemon;
      }
      return this.secondPokemon;
    }
  }

  round(): void{
    const attacker = this.getFastest();
    const defender = attacker === this.firstPokemon ? this.secondPokemon : this.firstPokemon;

    setInterval(() => { attacker.attack(defender); }, 1000);
    if (defender.isKo()){
      this.winner = attacker;
      return;
    }

    setInterval(() => { defender.attack(attacker); }, 1000);
    if (attacker.isKo()){
      this.winner = defender;
      return;
    }
  }

  letTheBattleBeginAndFinish(): void{
    console.log('The battle between ' + this.firstPokemon.name + ' and ' + this.secondPokemon.name + ' begin !\n');

    while (this.winner === null){
        this.round();
    }

    console.log('And the winner is ...');
    console.log(this.winner.name);
}

}
