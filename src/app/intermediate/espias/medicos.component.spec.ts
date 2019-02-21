import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from , empty , throwError } from 'rxjs/index';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null); // recibe instacia de http pero por ahora no interesa

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
        
    });


    it('Init: debe de cargar los médicos', () => {

        const medicos = ['medico1','medico2','medico3'];
    
        // Espía en el servicio la funcion getMedicos y  haz un callback fake que te paso
        // retorna los medicos con un obsevable con el operador from 
        spyOn( servicio, 'getMedicos' ).and.callFake(  () =>{

            return from( [ medicos ]);
        })

        // Llamamos a la funcion que usando el servicio y ejecutando el getMedicos
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('Debe llamar al servidor para agregar un medico', () => {

        const espia = spyOn(servicio,'agregarMedico').and.callFake( ()=>{

            return empty();

        })

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
        
    });

    it('Debe de agregar un nuevo médico al arreglo', () => {

        const medico = {
            id: 1,
            nombre: "Pedro"
        }
        spyOn(servicio,'agregarMedico').and.returnValue(  from([medico])  );

        componente.agregarMedico();
        // Se espera que el médico esté en la posición 0 o mayor
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
        
        
    });

    it('Si falla la inserción la propiedad mensajeError debe ser igual al de servicio', () => {

        const miError = 'No se pudo guardar el médico';

        spyOn( servicio ,'agregarMedico' ).and.returnValue( throwError(miError) );

        componente.agregarMedico();
        
        expect( componente.mensajeError ).toBe( miError );
        
    });


    xit('Debe de llamar al servidor para borrar un médico', () => {
        
        const spy = spyOn( servicio, 'borrarMedico' ).and.returnValue( empty() );
        componente.borrarMedico('1');

        // espia las ventanas confirm y retorna true, para no tener que hacer clic en ok (No funciona)
        spyOn( window, 'confirm' ).and.returnValue(true);

        expect( spy ).toHaveBeenCalledWith( '1' );

    });
    
    xit('NO debe de llamar al servidor para borrar un médico', () => {
        
        // espia las ventanas confirm y retorna true, para no tener que hacer clic en ok
        spyOn( window, 'confirm' ).and.returnValue(false);

        const spy = spyOn( servicio, 'borrarMedico' ).and.returnValue( empty() );
       
        componente.borrarMedico('1');

     
        expect( spy ).not.toHaveBeenCalledWith( '1' );

    });
    
    

});
