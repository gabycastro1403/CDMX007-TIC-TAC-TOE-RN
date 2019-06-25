import { Injectable } from "@angular/core";


@Injectable()

export class GameService {
   
   win:string;
    compareScore(score:number){
       const arrayWins:any[]= [ 7, 56, 448, 73, 146, 292, 273, 84 ];

        for( let i=0; i<arrayWins.length; i++){
            if((arrayWins[i]& score) === arrayWins[i]){
                return true
            }
        }
        return false
    }
    
    winOrTie(palabra:string){
        if(palabra == "empate"){
             this.win = " 🎉Empate 🎉"
            return this.win
        }else if(palabra =='🐁' || palabra == '🧀'){
            this.win =`Ganador ${palabra}`
            return this.win
        }

    }
}
 