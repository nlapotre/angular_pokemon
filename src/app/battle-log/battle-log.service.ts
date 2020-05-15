import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Injectable()
export class BattleLogService{
    messageList: string[] = [];

    pushAttackMessage(attacker: Pokemon, defender: Pokemon, damages: number){
        console.log(attacker.color);
        this.messageList.push('<font color="' + attacker.color + '">' + attacker.name + ' uses his basic attack ! It deals ' + damages + ' damages !</font>');
    }

    pushMessage(message: string): void{
        this.messageList.push(message);
    }
}
