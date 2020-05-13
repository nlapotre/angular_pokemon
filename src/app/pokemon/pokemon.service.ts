import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PokemonService {

    attack(attacker: Pokemon, opponent: Pokemon): string {

        opponent.hp -= attacker.atk;

        return attacker.name + ' uses his basic attack ! ' + opponent.name + ' now has ' + opponent.hp + ' hp.';
    }

    getImage(pokemon: Pokemon, back: boolean): string {
      return environment.image_path + (this.isKo(pokemon) ? 'ko' : pokemon.name + (back ? '_dos' : '')) + '.png';
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
}
