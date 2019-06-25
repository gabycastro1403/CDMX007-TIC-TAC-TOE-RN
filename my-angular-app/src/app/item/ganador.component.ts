import{ Component } from "@angular/core";
import{ GameService } from "../../servicio/game.service";


@Component({
    selector: "ns-ganador",
    moduleId: module.id,
    templateUrl: "./ganador.component.html",
})

export class GanadorComponent { 
    constructor(private gameService:GameService){}

}