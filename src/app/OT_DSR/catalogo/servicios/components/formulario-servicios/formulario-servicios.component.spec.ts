import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServiciosComponent } from './formulario-servicios.component';

describe('FormularioServiciosComponent', () => {
  let component: FormularioServiciosComponent;
  let fixture: ComponentFixture<FormularioServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
