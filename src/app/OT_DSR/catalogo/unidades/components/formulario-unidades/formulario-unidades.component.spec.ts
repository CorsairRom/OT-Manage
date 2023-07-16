import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUnidadesComponent } from './formulario-unidades.component';

describe('FormularioUnidadesComponent', () => {
  let component: FormularioUnidadesComponent;
  let fixture: ComponentFixture<FormularioUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
