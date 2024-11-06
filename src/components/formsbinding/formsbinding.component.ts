import { Component } from '@angular/core';

@Component({
  selector: 'app-formsbinding',
  templateUrl: './formsbinding.component.html',
  styleUrl: './formsbinding.component.css'
})
export class FormsbindingComponent {
    public usuario: any;
    public mensaje: string;
    constructor(){
        this.mensaje="",
        this.usuario={
            nombre:"",
            apellido:"",
            edad:0,
        }
    }
    recibirDatos():void{
        this.mensaje="Datos recibidos"
    }
}
