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

  constructor (){
    let pikachu = new Pokemon("PIKAPIKA", 10);
    let ronflex = new Pokemon("Ronron", 0);
    this.battle = new Battle(pikachu, ronflex);
  }

  ngOnInit(){
    
  }
}
