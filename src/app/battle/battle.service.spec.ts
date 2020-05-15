import { TestBed } from '@angular/core/testing';
import {BattleService} from './battle.service';
import {Pokemon} from '../pokemon/pokemon';

describe('BattleService', () => {
  describe('First attacker', () => {
    it('should be the pokemon with the greatest speed if they\'re differents', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 70, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.scondPokemon = salameche;
      expect(battle.getFastest()).toBe(pikachu);
    });

    it('should be random if the speeds are equals', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 100, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.scondPokemon = salameche;

      expect(battle.getFastest(1)).toBe(pikachu);
    });
  });

  describe('Attack ', () => {
    it('Attack should substract attacker attack from defender hp', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 100, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.scondPokemon = salameche;

      battle.pokemonService.attack(pikachu, salameche);
      expect(salameche.hp).toBe(15);
    });
  });

  describe('The winner', () => {
    it('should be named when the other pokemon have 0 hp', () => {
      const pikachu = new Pokemon('Pikachu', 100, '', '', '');
      const salameche = new Pokemon('Salamèche', 90, '', '', '');

      const battle = TestBed.get(BattleService);
      battle.firstPokemon = pikachu;
      battle.scondPokemon = salameche;

      battle.rounds(pikachu, salameche);
      expect(battle.winner).toBe(pikachu);
    });
  });
})