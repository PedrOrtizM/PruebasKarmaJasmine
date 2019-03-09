import { Jugador2 } from './jugador2';




describe('Pruebas de Jugador', () => {


   let jugador: Jugador2;

    beforeEach(() => {
        
        jugador = new Jugador2();

    });
    


    it('Debe de emitir un evento cuando recibe daño', () => {
        

        
        let nuevaVida = 0;
        
        
        // nos suscribimos a la variable cambia vida para obtener siempre los cambios
        jugador.vidaCambia.subscribe((vida:number) => { 
            nuevaVida = vida;
        })

        // Ejecutamos la funcion y la nuevaVida obtendrá los cambios. Async
        jugador.recibeDanio(1000);


        expect(nuevaVida).toBe(0);
    });
});
