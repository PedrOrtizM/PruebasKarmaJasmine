
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { empty } from 'rxjs/index';

// Se declara una clase Fake que simule ser el router con su funcion navigate
class FakeRouter{
  navigate ( params){     }
}

// Se declara una clase Fake que simule ser el activatedroute que retorna un 
// observable cuando se le piden los parametros
class FakeActivatedRoute {
  
  private subject = new Subject();

  push(valor:any){
    this.subject.next(valor);
  }


  get params(){
    return this.subject.asObservable();
  }
}



describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        // Para no user las clases de angular que ya estan probadas  se reemplaza
        // el router y el activated por las fake creada de esta forma:
        { provide: Router, useClass: FakeRouter }, 
        { provide: ActivatedRoute, useClass: FakeActivatedRoute}]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('Debe de redireccionar a Médico cuando se guarde', () => {

    // se obtiene un router
    const router = TestBed.get(Router);

    // se espia la funcion navigate del router
    const spy = spyOn(router,'navigate');

    // se llama la funcion
    component.guardarMedico();  

    // Se espera que el espia sea llamado con los dos parametros, ruta y id
    expect(spy).toHaveBeenCalledWith(['medico','123'])
  });


  it('Debe de asignarle al parámetro ID = nuevo', () => { 

    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo'});

    expect(component.id).toBe('nuevo');

    
  });
  
  

});
