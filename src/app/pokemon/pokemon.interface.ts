import { Pokemon } from './pokemon';

export default interface PokemonInterface {
  attack(adversary: Pokemon): string;
  gainXp(amount: number): void;
  isKo(): boolean;
  lvlUp(): void;
  isFastest(opponent: Pokemon): boolean;
}
