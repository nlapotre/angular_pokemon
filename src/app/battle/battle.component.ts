import { Component, OnInit, Input } from '@angular/core';
import { BattleService } from './battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  constructor(public battleService: BattleService) {
  }

  ngOnInit(){
    this.battleService.letTheBattleBeginAndFinish();
  }

  pauseGame(){
    this.battleService.isPaused = !this.battleService.isPaused;
  }
}
