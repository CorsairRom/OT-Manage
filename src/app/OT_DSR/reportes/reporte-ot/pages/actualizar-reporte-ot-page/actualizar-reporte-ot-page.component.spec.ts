import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReporteOtPageComponent } from './actualizar-reporte-ot-page.component';

describe('ActualizarReporteOtPageComponent', () => {
  let component: ActualizarReporteOtPageComponent;
  let fixture: ComponentFixture<ActualizarReporteOtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarReporteOtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarReporteOtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
