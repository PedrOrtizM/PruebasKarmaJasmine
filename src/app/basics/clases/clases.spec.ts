import { Jugador } from './clases';



describe('Prueba de Clases', () => {

   
    //beforeEach
    //beforeAll
    //afterAll
    //afterEach

    let jugador = new Jugador(); 

   // Función que se ejecuta antes de cada it para reiniciar valores del objeto
   beforeEach(()=>{

    jugador = new Jugador();

   })
 
    it('Debe de retornar 80 de vida si recibe 20 de daño', () => {
        
        const resp = jugador.recibeDanio(20);

        expect (resp).toBe(80);

    });

    it('Debe retornar 50 de vida si recibe 50 de daño', () => {
        
        const resp = jugador.recibeDanio(50);
        expect (resp).toBe(50);

        
    });
    

    it('Debe retornar 0 porque es mayor que 100', () => {
        
        const resp = jugador.recibeDanio(101)
        expect (resp).toBe(0);
    });
    
    
});