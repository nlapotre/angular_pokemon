import PokemonComponent from './pokemon.component';

export default interface PokemonInterface {
  attack(adversary: PokemonComponent): void;
  gainXp(amount: number): void;
  isKo(): boolean;
  lvlUp(): void;
  getFastest(opponent: PokemonComponent): boolean;
}
