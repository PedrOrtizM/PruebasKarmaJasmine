import { mensaje } from '../string/string';





describe('Pruebas de Strings', ()=>{


    it("Debe retornar una cadena",()=>{

        const resp = mensaje("Pedro");
        expect(typeof resp).toBe("string"); // debería ser de tipo string

    });


    it("Debe contener el nombre enviado",()=>{
        
        const nombre = "Pedro";
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);   // debe contener el  nombre

    });

});