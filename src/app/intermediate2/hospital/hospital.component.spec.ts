import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  // no es necesario usar async porque ya en el WebPack viene incluido
  // un solo archivo para HTML y TS - lo mismo para el .compileComponents
  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    //.compileComponents(); 
  }));

  beforeEach(() => {
       TestBed.configureTestingModule({
        declarations: [ HospitalComponent ]
      })
    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // dispara el ciclo de detección de cambios de angular
  });

  it('Debe de crear un HospitalComponents', () => {
    expect(component).toBeTruthy();
  });
});
