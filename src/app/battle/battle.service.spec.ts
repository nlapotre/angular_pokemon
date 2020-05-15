import { TestBed, async } from '@angular/core/testing';
import {BattleService} from './battle.service';
import {Pokemon} from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';
import { BattleLogService } from '../battle-log/battle-log.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BattleService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleService,PokemonService,BattleLogService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  describe('First attacker', () => {
    it('should be the pokemon with the greatest speed if they\'re differents', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 70, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.secondPokemon = salameche;
      expect(battle.getFastest()).toBe(pikachu);
    });

    it('should be random if the speeds are equals', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 100, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.secondPokemon = salameche;

      expect(battle.getFastest(1)).toBe(pikachu);
    });
  });

  describe('Attack ', () => {
    it('Attack should substract attacker attack from defender hp', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 100, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.secondPokemon = salameche;

      battle.pokemonService.attack(pikachu, salameche);
      expect(salameche.hp).toBe(15);
    });
  });

  describe('The winner', () => {
    it('should be named when a pokemon have 0 hp', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 100, '', '', '');
      salameche.hp = 0;

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.secondPokemon = salameche;

      battle.rounds(pikachu, salameche);
      expect(battle.winner).toBe(pikachu);
    });
  });
})