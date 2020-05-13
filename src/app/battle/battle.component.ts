import { Component, OnInit, Input } from '@angular/core';
import { BattleService } from './battle.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  public dateStartBattle: number;

  constructor(public battleService: BattleService) {
  }

  ngOnInit(){
    this.battleService.letTheBattleBeginAndFinish();
  }

  pauseGame(){
    if( !this.battleService.isStarted ){
      this.dateStartBattle = Date.now();
      this.battleService.isStarted = true;
    }
    this.battleService.isPaused = !this.battleService.isPaused;
  }
}
