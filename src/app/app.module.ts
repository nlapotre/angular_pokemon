import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { PokemonService } from './pokemon/pokemon.service';
import { BattleService } from './battle/battle.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PokemonService,
    BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
