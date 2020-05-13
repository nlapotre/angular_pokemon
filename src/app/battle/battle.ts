import { Pokemon } from '../pokemon/pokemon';

export class Battle {
  public firstPokemon: Pokemon;
  public secondPokemon: Pokemon;
  public winner = null;
  public messageList: string[] = [];
  public isPaused = true;

  constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    this.firstPokemon = firstPokemon;
    this.secondPokemon = secondPokemon;
  }

  public getFastest(random = Math.random): Pokemon {
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

    setTimeout(() => {
      if (this.isPaused) {
        this.round();
        return;
      }

      const attacker = this.getFastest();
      const defender = attacker === this.firstPokemon ? this.secondPokemon : this.firstPokemon;
      this.messageList.push(attacker.attack(defender));
      if (defender.isKo()){
        this.displayWinner(attacker);
        return;
      }

      this.messageList.push(defender.attack(attacker));
      if (attacker.isKo()){
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
