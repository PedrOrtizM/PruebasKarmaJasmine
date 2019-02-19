export class Jugador{


    vida:number;

    constructor(){
        this.vida = 100;
    }


    recibeDanio( danio: number){

        if( danio >= 100 ){
            this.vida = 0;
        }else{

        this.vida -= danio;
        
        }

    return this.vida;
    }



}