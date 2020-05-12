import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  public first;
  public second;

  constructor() { }

  ngOnInit(): void {
  }


  public getFastest(random = Math.random()): PokemonComponent {
    if (this.first.isFastest(this.second)) {
      return this.first;
    } else if (this.second.isFastest(this.first)) {
      return this.second;
    } else {
      if (random() % 2 === 1) {
        return this.first;
      }
      return this.second;
    }
  }
  // setInterval(function(){ alert("Hello"); }, 3000);

}
