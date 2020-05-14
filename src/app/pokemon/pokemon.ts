export class Pokemon {
    public atk;
    public lvl;
    public hp;
    public hpMax;
    public name;
    public speed;
    public xp;
    public xpMax;
    public imageFront;
    public imageBack;
    public color: string;

    constructor(name: string, speed: number, imageBack: string, imageFront: string, color: string) {
        this.name = name;
        this.speed = speed;
        this.imageBack = imageBack;
        this.imageFront = imageFront;
        this.color = color;
        this.atk = 5;
        this.hp = 20;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }
}
