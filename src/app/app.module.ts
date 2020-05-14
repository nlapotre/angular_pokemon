import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { PokemonService } from './pokemon/pokemon.service';
import { BattleService } from './battle/battle.service';
import { BattleLogComponent } from './battle-log/battle-log.component';
import { BattleLogService } from './battle-log/battle-log.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    BattleLogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonService,
    BattleService,
    BattleLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
