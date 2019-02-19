import { incrementar } from "./number";






describe("Pruebas de números", ()=>{

    it("Debe retornar 100 si es mayor que 100",()=>{

        const resp = incrementar(300);
        expect(resp).toBe(100);

    })


    it("Debe retornar el numero + 1 si es menor que 100",()=>{

        const resp = incrementar(50);
        expect(resp).toBe(51);

    })



})