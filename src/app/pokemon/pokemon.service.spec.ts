import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {PokemonService} from './pokemon.service';
import {Pokemon} from './pokemon';

describe('PokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PokemonService]
  }));

  it('should return a pokemon', async(() => {
    const pokemonService = TestBed.get(PokemonService);
    //pokemonService.http = TestBed.get(HttpClientTestingModule);
    const http = TestBed.get(HttpTestingController);

    pokemonService.getPokemon('pikachu').subscribe((pokemon: Pokemon) => {
      expect(pokemon.name).toBe('pikachu');
      expect(pokemon.speed).toBe(90);
    });

    http.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
  }));


  describe('a pokemon', () => {
    it('should be KO when it has 0 hp', () => {
      const pokemonService = TestBed.get(PokemonService);
      const salameche = new Pokemon('Salamèche', 100, '', '', '');
      const magicarpe = new Pokemon('Magicarpe', 100, '', '', '');

      pokemonService.attack(magicarpe, salameche);
      pokemonService.attack(magicarpe, salameche);
      pokemonService.attack(magicarpe, salameche);
      pokemonService.attack(magicarpe, salameche);

      expect(pokemonService.isKo(salameche)).toBe(true);
    });

    it('should gain hp when it lvlUp', () => {
      const pokemonService = TestBed.get(PokemonService);
      const magicarpe = new Pokemon('Magicarpe', 100, '', '', '');

      pokemonService.lvlUp(magicarpe);

      expect(magicarpe.hp).toBe(30);
    });
  });
});
