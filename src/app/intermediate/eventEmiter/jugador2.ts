import { EventEmitter } from '@angular/core';

export class Jugador2{


    vida:number;
    vidaCambia= new EventEmitter<number>();

    constructor(){
        this.vida = 100;
    }


    recibeDanio( danio: number){

        if( danio >= 100 ){
            this.vida = 0;
        }else{

        this.vida -= danio;
        
        }

      this.vidaCambia.emit(this.vida);
    }



}