import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture} from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';



// Pruebas de Integración
describe('MedicoComponet', () => {
    
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        
        // Configurar un modulo para  testear un componet !x
         TestBed.configureTestingModule({
             declarations: [ MedicoComponent],
             providers: [ MedicoService ],
             imports: [HttpClientModule]

         });

         // Regresa un fixture (Permite acceso a HTML..etc)
         fixture = TestBed.createComponent(MedicoComponent);
         component = fixture.componentInstance;
    });


    it('Debe de crearse el componente', () => {

        expect(component).toBeTruthy();
        
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = "Pedro";
        const resp = component.saludarMedico(nombre);

        expect( resp ).toContain( nombre );
        
        
    });
    
});