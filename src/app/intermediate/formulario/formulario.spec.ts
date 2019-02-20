import { Formulario } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Prueba de Formularios', () => {

    let formulario: Formulario;

    beforeEach(() => {

        formulario = new Formulario( new FormBuilder() );
        
    });
    

    it('Debe contener dos campos (Email y Password)', () => {
        
        expect( formulario.form.contains('email') ).toBeTruthy();
        expect( formulario.form.contains('password') ).toBeTruthy();
    });


    it('El email es requerido', () => {
        
        let email = formulario.form.get('email');
        email.setValue('');
        expect ( email.valid  ).toBeFalsy();

    });

    it('El email debe ser válido', () => {
        
        let email = formulario.form.get('email');
        email.setValue('pedro@gmail.com');
        expect( email.valid ).toBeTruthy();

    });
    
    
});
