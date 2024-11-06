import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {
    public tabla: Array<number>
    public resultado!: number
    @ViewChild("cajanumero") cajanumeroRef: ElementRef
    constructor(){
        this.tabla = []
        this.cajanumeroRef = new ElementRef(0)
    }
    multiplicar(): void{
        let num = parseInt(this.cajanumeroRef.nativeElement.value)
        this.tabla.splice(0,this.tabla.length)
        for (let i = 0; i <=9; i++) {
            this.resultado = num*(i+1);
            this.tabla.push(this.resultado);

        }
        console.log(this.tabla)

    }
}
