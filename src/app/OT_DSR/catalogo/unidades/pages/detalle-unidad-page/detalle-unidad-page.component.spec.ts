import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUnidadPageComponent } from './detalle-unidad-page.component';

describe('DetalleUnidadPageComponent', () => {
  let component: DetalleUnidadPageComponent;
  let fixture: ComponentFixture<DetalleUnidadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUnidadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUnidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
