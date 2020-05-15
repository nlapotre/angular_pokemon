import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BattleComponent } from './battle.component';
import {BattleService} from './battle.service';
import {PokemonService} from '../pokemon/pokemon.service';
import {ActivatedRoute} from '@angular/router';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    component.pokemonService = TestBed.get(PokemonService);
    component.battleService = TestBed.get(BattleService);
    component.route = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
