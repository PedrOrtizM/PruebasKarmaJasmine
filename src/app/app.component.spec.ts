import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {  RouterTestingModule  } from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],

      imports: [
        RouterTestingModule.withRoutes([]) // PARA LAS RUTAS
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Ignoren cualquier selector que no conozcan 

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pruebas');
  });

  it('Debe de tener un router-outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);
    //Obtenemos la directiva router-outlet
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet) );

    // NO debería ser Null
    expect(debugElement).not.toBeNull();

  });


  

  
});
