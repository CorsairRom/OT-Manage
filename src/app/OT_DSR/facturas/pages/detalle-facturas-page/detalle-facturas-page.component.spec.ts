import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFacturasPageComponent } from './detalle-facturas-page.component';

describe('DetalleFacturasPageComponent', () => {
  let component: DetalleFacturasPageComponent;
  let fixture: ComponentFixture<DetalleFacturasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFacturasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFacturasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
