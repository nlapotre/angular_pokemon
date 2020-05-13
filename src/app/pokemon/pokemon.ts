import PokemonInterface from './pokemon.interface';

export class Pokemon implements PokemonInterface {
    public atk;
    public lvl;
    public hp;
    public hpMax;
    public name;
    public speed;
    public xp;
    public xpMax;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
        this.atk = 5;
        this.hp = 100;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }

    ngOnInit(): void {
    }

    attack(opponent: Pokemon): string {

        opponent.hp -= this.atk;

        return this.name + ' uses his basic attack ! ' + opponent.name + ' now has ' + opponent.hp + ' hp.';
    }

    gainXp(amount: number): void {
        this.xp += amount;

        if (this.xp > this.xpMax) {
            this.lvlUp();
        }
    }

    isKo(): boolean {
        return this.hp === 0;
    }

    lvlUp(): void {
        this.lvl += 1;
        this.hp += 10;
        this.xpMax *= 2;
        this.speed += 3;
    }

    public isFastest(opponent: Pokemon): boolean {
        return this.speed > opponent.speed;
    }

}
