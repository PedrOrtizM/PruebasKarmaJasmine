import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture} from '@angular/core/testing';



// PRUEBAS DE INTEGRACIÓN
describe('MedicoComponet', () => {
    
    let component: MedicoComponent;

    // ComponentFixture permite poder controlar y tener acceso al DOM, poder hacer query
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        
        // TestBed es una clase 
        // configurar un modulo para  testear un componet !x
         TestBed.configureTestingModule({
             declarations: [ MedicoComponent],
             providers: [ MedicoService ],
             imports: [HttpClientModule]

         });

         // Regresa un fixture (Permite acceso a HTML, a los compnentes del DOM..etc)
         fixture = TestBed.createComponent(MedicoComponent);
         // Instancia del componente
         component = fixture.componentInstance;
    });


    it('Debe de crearse el componente', () => {

        expect(component).toBeTruthy();
        
    });

    it('Debe de retornar el nombre del médico', () => {

        //const nombre = "Pedro";
        const resp = component.saludarMedico("Pedro");

        expect( resp ).toContain( "Pedro" );
        
        
    });
    
});