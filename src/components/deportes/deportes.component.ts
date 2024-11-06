import { Component } from "@angular/core";

@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrl:"./deportes.component.css"
})

export default class DeportesComponent{
    public sports: Array<string>
    public numeros:Array<number>
    constructor(){
        this.sports = ["Futbol","Baloncesto","Tenis","Voleibol","Boxeo","Carreras","Remo","Powerlifting"],
        this.numeros=[2,4,6,8,10,1,3,5,7,9,11,13,15,17,19,20,22,24,26,28]
    }
}
