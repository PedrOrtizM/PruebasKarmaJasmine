import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        // Le asignamos a la varible leyenda del componente un valor
        component.leyenda = 'Leyenda de spec.ts';

        // Como le asignamos un nuevo valor a la leyenda debemos decirle a angular que
        // Active la detección de cambioss 
        fixture.detectChanges();  


        // Se declara una constante de tipo HTMTLElement que es de typesScript nativa
        // con el fixture accedemos al html y buscamos los elementos por query.
        // Para buscar facilente usamos la Clase By de angular para buscar por css
        // usamos selectores y obtenemos la etiquete h3 y finalmente obtenemos el elemntos
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain('Leyenda de spec.ts');

    });



    it('Debe de mostrar en el Input el valor del progresso', () => {

        // la función cambiar valor aumenta en 5 el valor del input 
        component.cambiarValor(5);
        
        fixture.detectChanges();  

        // Cuando el ciclo de detección de cambios esté estable realice esto
        fixture.whenStable().then( ()=>{

            const input = fixture.debugElement.query(By.css('input')).nativeElement;
            
            // Se espera que sea 55 porque se inicia el 50 y se le aumenta 5
            expect(input.value).toBe('55');
            
        })
    });


    it('Debe de ingrementar/decrementar en 5 con un click en el boton', () => {

        // QueryAll para obtener todos los botones que cumplan la condición 
        const botones = fixture.debugElement.queryAll( By.css( '.btn-primary' ));
        
        // JavaScript Puro. Hacemos clic en el boton de decrementar
        botones[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45);

        
        // JavaScript Puro. Hacemos clic en el boton de incrementar. Como estaba en 45 
        // ahora debe estar en 50
        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50);
    });
    
    it('En el título del componente debe mostrar el progreso', () => {
    
        const botones = fixture.debugElement.queryAll( By.css( '.btn-primary' ));
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        
        expect(elem.innerHTML).toContain('45');

    });
    

});
