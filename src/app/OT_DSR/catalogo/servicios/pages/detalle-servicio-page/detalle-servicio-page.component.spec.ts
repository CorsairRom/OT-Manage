import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioPageComponent } from './detalle-servicio-page.component';

describe('DetalleServicioPageComponent', () => {
  let component: DetalleServicioPageComponent;
  let fixture: ComponentFixture<DetalleServicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleServicioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleServicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
