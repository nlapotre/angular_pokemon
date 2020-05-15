import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BattleComponent } from './battle.component';
import {BattleService} from './battle.service';
import {PokemonService} from '../pokemon/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;
  const pokemon =  new Pokemon(
    'Salameche',
    10,
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'red'
  );
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: PokemonService,
          useValue:
            {
              getPokemon: () => of(pokemon)
            },
        },
        {
          provide: BattleService,
          useValue: {
            firstPokemon: pokemon,
            secondPokemon: pokemon,
            isPaused: true,
            isStarted: false,
            winner: null
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              name1: 'Salameche',
              name2: 'Salameche'
            })
          }
        }
      ]
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
