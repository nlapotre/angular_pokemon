import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { Battle } from './battle';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  @Input() battle;

  constructor(){
    const pikachu = new Pokemon('PIKAPIKA', 10);
    const ronflex = new Pokemon('Ronron', 100);
    this.battle = new Battle(pikachu, ronflex);
  }

  ngOnInit(){
    this.battle.letTheBattleBeginAndFinish();
  }
}
