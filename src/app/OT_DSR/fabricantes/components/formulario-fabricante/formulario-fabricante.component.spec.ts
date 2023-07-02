import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFabricanteComponent } from './formulario-fabricante.component';

describe('FormularioFabricanteComponent', () => {
  let component: FormularioFabricanteComponent;
  let fixture: ComponentFixture<FormularioFabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFabricanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
