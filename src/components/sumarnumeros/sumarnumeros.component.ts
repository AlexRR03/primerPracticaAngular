import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector:"app-sumarnumeros",
    templateUrl:"./sumarnumeros.component.html"
})
export default class SumarNumerosCompoent{
    @ViewChild("cajanumero1") cajanumero1Ref: ElementRef;
    @ViewChild("cajanumero2") cajanumero2Ref: ElementRef;

    public suma: number

    //EN ANGULAR TODAS LAS PROPIEDADES DEBEN SER INSTANCIADAS/INICIADAS
    constructor(){
        this.suma=0
        this.cajanumero1Ref = new ElementRef(0);
        this.cajanumero2Ref = new ElementRef(0);
    }
    sumarNumeros(): void{
        console.log(this.suma)
        let num1 = this.cajanumero1Ref.nativeElement.value;
        let num2 = this.cajanumero2Ref.nativeElement.value;
        this.suma = parseInt(num1)+parseInt(num2);
        console.log(this.suma)
        console.log(num1)
        console.log(num2)
    }
}
