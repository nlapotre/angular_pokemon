import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonAPI } from './pokemonAPI.interface';
import { SpeciesAPI } from './speciesAPI.interface';
import { PokemonDisplay } from './pokemonDisplay.class';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  attack(attacker: Pokemon, opponent: Pokemon): void {
      opponent.hp -= attacker.atk;
  }

  getImage(pokemon: Pokemon, back: boolean): string {
    if(pokemon === undefined) {
      return;
    }
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
    let pokemonFromApi: PokemonAPI;
    return this.http.get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon/' + name)
      .pipe(
        mergeMap(res => {
          pokemonFromApi = res;
          return this.getColor(res.species.url)
        }),
        map( species => {
        return new Pokemon(
          name,
          pokemonFromApi.stats[0].base_stat,
          pokemonFromApi.sprites.back_default,
          pokemonFromApi.sprites.front_default,
          species
        ); 
        })
      )
  }

  getColor(speciesURL: string): Observable<string>{
    return this.http.get<SpeciesAPI>(speciesURL)
      .pipe(
        map(res => {
          return res.color.name
        })
      )
  }

  getAllPokemon(): Observable<PokemonDisplay[]>{
    return this.http.get<PokemonAPI[]>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map(listPokemon => {
          return listPokemon.map((pokemon) => {
            return {
              name: pokemon.name,
              sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.id+".png"
            }
          }
          )
        })
      );
  } 
}
