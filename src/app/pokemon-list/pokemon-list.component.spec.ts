import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PokemonService} from '../pokemon/pokemon.service';
import {of} from 'rxjs';
import { PokemonAPI } from '../pokemon/pokemonAPI.interface';
import {Router} from '@angular/router';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  const pokemon: PokemonAPI =  {
    name: 'Salameche',
    id: 7,
    stats: [
      {
        base_stat: 90
      }
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    species: {
      url: 'someurl'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: PokemonService,
          useValue:
            {
              getAllPokemon: () => of([pokemon])
            },
        },
        {
          provide: Router
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
