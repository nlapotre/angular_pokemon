export class Pokemon {
    public atk: number;
    public defense: number;
    public lvl: number;
    public hp: number;
    public hpMax: number;
    public name: string;
    public speed: number;
    public xp: number;
    public xpMax: number;
    public imageFront: string;
    public imageBack: string;
    public color: string;

    constructor(name: string, speed: number, attack: number, defense:number, hp: number, imageBack: string, imageFront: string, color: string) {
        this.name = name;
        this.speed = speed;
        this.imageBack = imageBack;
        this.imageFront = imageFront;
        this.color = color;
        this.atk = attack;
        this.defense = defense;
        this.hp = hp;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }
}
