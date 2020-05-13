import { Component, OnInit } from '@angular/core';
import { BattleLogService } from './battle-log.service';

@Component({
  selector: 'app-battle-log',
  templateUrl: './battle-log.component.html',
  styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent implements OnInit {

  constructor(public battleLogService: BattleLogService) { }

  ngOnInit(): void {
  }

}
