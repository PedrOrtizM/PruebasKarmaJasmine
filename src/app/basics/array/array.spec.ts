import { obtenerNombres } from './array';

describe("Pruebas de Array", ()=>{


    it("Debe retornar al menos 3 nombres",()=>{

        const resp = obtenerNombres();

        expect( resp.length ).toBeGreaterThanOrEqual(3);
    })

    
    it("Debe de existir Pedro y Juan",()=>{

        const resp = obtenerNombres();

        expect( resp ).toContain("Pedro");
        expect( resp ).toContain("Juan");
    })

})