import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonAPI } from './pokemonAPI.interface';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  attack(attacker: Pokemon, opponent: Pokemon): void {
      opponent.hp -= attacker.atk;
  }

  getImage(pokemon: Pokemon, back: boolean): string {
    return (this.isKo(pokemon) ? 'assets/sprites/ko.png' : (back ? pokemon.imageBack : pokemon.imageFront));
  }

  gainXp(pokemon: Pokemon, amount: number): void {
      pokemon.xp += amount;

      if (pokemon.xp > pokemon.xpMax) {
          this.lvlUp(pokemon);
      }
  }

  isKo(pokemon: Pokemon): boolean {
      return pokemon.hp <= 0;
  }

  lvlUp(pokemon: Pokemon): void {
      pokemon.lvl += 1;
      pokemon.hp += 10;
      pokemon.xpMax *= 2;
      pokemon.speed += 3;
  }

  public isFastest(firstPokemon: Pokemon, secondPokemon: Pokemon): boolean {
      return firstPokemon.speed > secondPokemon.speed;
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon/' + name)
      .pipe(
        map(res => {
          return new Pokemon(
            name,
            res.stats[0].base_stat,
            res.sprites.back_default,
            res.sprites.front_default
          );
        })
      );
  }
}
