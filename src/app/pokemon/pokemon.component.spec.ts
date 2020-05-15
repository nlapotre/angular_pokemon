import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';
import {PokemonService} from './pokemon.service';
import {Pokemon} from './pokemon';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: PokemonService,
          useValue:
            {
              getImage: (pokemon: Pokemon, back: boolean) => {
                return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png';
              }
            }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
