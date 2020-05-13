
export class Pokemon {
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
        this.hp = 20;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }

    
}
