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
    
        // SpyOn es una instrucción  que nos permite hacer peticiones falsas
        // Espía en el servicio la funcion "getMedicos" y  haz un callback fake que te paso
        // retorna los medicos con un obsevable con el operador from 
        spyOn( servicio, 'getMedicos' ).and.callFake(  () =>{

            // retorna un observable con "from" de medicos
            return from( [ medicos ]);
        })

        // Es necesario llamar al ngOnInit porque por defecto angular no lo inicia
        // Llamamos a la funcion que usando el servicio y ejecutando el getMedicos
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('Debe llamar al servidor para agregar un medico', () => {

        // en el servicio la funcuion agregar médico 
        const espia = spyOn(servicio,'agregarMedico').and.callFake( ()=>{

            return empty(); // retorna un observable vacío

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

        // Medicos es el arreglo que está en el component
        // Se espera que el médico esté en la posición 0 o mayor
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
        
        
    });

    it('Si falla la inserción, la propiedad mensajeError debe ser igual al de servicio', () => {

        const miError = 'No se pudo guardar el médico';

        // Espia al servicio y cuando se llame la función agregarMédico retorna un error con el 
        // Mensaje de miError
        spyOn( servicio ,'agregarMedico' ).and.returnValue( throwError(miError) );

        componente.agregarMedico();
        
        expect( componente.mensajeError ).toBe( miError );
        
    });


    it('Debe de llamar al servidor para borrar un médico', () => {
        
       // espia las ventanas confirm y retorna true, para no tener que hacer clic en ok (No funciona)
        spyOn( window, 'confirm' ).and.returnValue(true);
        
        const spy = spyOn( servicio, 'borrarMedico' ).and.returnValue( empty() );
        componente.borrarMedico('1');

        //expect(servicio.agregarMedico).toHaveBeenCalled();
        expect( spy ).toHaveBeenCalledWith('1');

    });
    
    it('NO debe de llamar al servidor para borrar un médico', () => {
        
        // espia las ventanas confirm y retorna false, para no tener que hacer clic en cancelar
        spyOn( window, 'confirm' ).and.returnValue(false);

        // Este espia nunca que se va a llamar porque el usuario dijo que no borrara
        const spy = spyOn( servicio, 'borrarMedico' ).and.returnValue( empty() );
       
        
        componente.borrarMedico('1');

     
        expect( spy ).not.toHaveBeenCalledWith( '1' );

    });
    
    

});
