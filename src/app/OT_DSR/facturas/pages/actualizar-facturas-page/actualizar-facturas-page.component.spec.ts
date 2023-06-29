import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFacturasPageComponent } from './actualizar-facturas-page.component';

describe('ActualizarFacturasPageComponent', () => {
  let component: ActualizarFacturasPageComponent;
  let fixture: ComponentFixture<ActualizarFacturasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarFacturasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFacturasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
