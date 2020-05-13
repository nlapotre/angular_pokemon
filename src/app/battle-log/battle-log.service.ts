import { Injectable } from "@angular/core";
import { Pokemon } from '../pokemon/pokemon';

@Injectable()
export class BattleLogService{
    messageList: string[];

    pushAttackMessage(attacker: Pokemon, defender: Pokemon, damages: number){
        this.messageList.push(attacker.name + ' uses his basic attack ! ');
    }
    
}