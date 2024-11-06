import { Component } from "@angular/core";

//UN COMPONENT TIENE UNA DECLARACION DE SU CONTENIDO

@Component({
    //HAY QUE DECLARAR EL NOMBRE DEL COMPONENT
    //EN ANGULAR SE LUELEN LLAMAR CON GUION
    selector:"primer-component",
    templateUrl:"./primer.component.html",
    styleUrl:"./primer.component.css"
})

//TODO COMPONENT DEBE SER DECLARADO COMO UNA CLASE
//DICHO NOMBRE SE UTILIZA EN app.module.ts

export class PrimerComponent{
    //AQUI SE DECLARAN LA VARIABLES
    //VARIABLES CON TIPADO
    public titulo: string;
    public descripcion:string;
    public anyo:number;

    //EN ANGULAR HAY UN CONSTRUCTOR PARA INICILAIZAR LA VARIABLES
    //O RECUPERARLAS
    constructor(){
        //PARA ACCEDER A LAS PROPIEDADADES DE LA CLASE
        //SE UTILIZA LA PALABRA this
        this.titulo="Hoy es miercoles";
        this.descripcion="Hoy toca angular"
        this.anyo=2024;

    }

}
