import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export default class PokemonComponent implements OnInit {
  public atk;
  public lvl;
  public hp;
  public hpMax;
  public name;
  public speed;
  public xp;
  public xpMax;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
    this.atk = 5;
    this.hp = 10;
    this.hpMax = this.hp;
    this.lvl = 1;
    this.xp = 0;
    this.xpMax = 10;
  }

  ngOnInit(): void {
  }

  attack(opponent: PokemonComponent): void {

    opponent.hp -= this.atk;

    console.log(this.name + ' uses his basic attack !');
    console.log(opponent.name + ' now has ' + opponent.hp + ' hp.');
  }

  gainXp(amount: number): void {
    this.xp += amount;

    if (this.xp > this.xpMax) {
      this.lvlUp();
    }
  }

  isKo(): boolean {
    return this.hp === 0;
  }

  lvlUp(): void {
    this.lvl += 1;
    this.hp += 10;
    this.xpMax *= 2;
    this.speed += 3;
  }

  public isFastest(opponent: PokemonComponent): boolean {
    return this.speed > opponent.speed;
  }

}
