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
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'battle/:name1/:name2',  component: BattleComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    BattleLogComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    PokemonService,
    BattleService,
    BattleLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
