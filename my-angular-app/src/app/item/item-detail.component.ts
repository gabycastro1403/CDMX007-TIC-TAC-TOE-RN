import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { EventData } from "tns-core-modules/ui/page/page";
import { GameService } from "../../servicio/game.service";  


@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    player:string="🧀";
    playerAct:string;
    playerScore:any;
    numberTurns:number;
    turns:number;

    constructor(private game: GameService,private router:Router ) { }

    ngOnInit() {
        this.playerScore= { '🐁':0, '🧀':0 };
        this.numberTurns=0;
        this.turns= 0;
    }

    getScore(args:EventData){
        //Esta funcion manda los datos de "X" o "O" y desactivando el boton
        let button= args.object;
        this.player = this.player === '🐁' ? '🧀' : '🐁';
        this.playerAct = this.playerActive(this.player);
        button.set("text",this.player);
        button.set("isEnabled",false);

        //Estamos obteniendo al jugador activo y sumando el valor de cada casilla
        
        this.playerScore[this.player]= this.playerScore[this.player]+ parseInt(button.get("score"))
        this.turns++;
        
        //Aqui hacemos la comparacion para detectar a los ganadores 

        if(this.game.compareScore(this.playerScore[this.player])){
            this.game.winOrTie(this.player);
            this.router.navigate(['/ganador']);
        }else if(this.turns === 9){
            this.game.winOrTie("empate");
            this.router.navigate(['/ganador']);
        }
        
    }


    playerActive(player:string){
        if(player=='🐁'){
            player='🧀'
            return `Jugador ${player}`
        }else if (player=='🧀'){
            player='🐁'
            return `Jugador ${player}`
        }
       
    }
}
