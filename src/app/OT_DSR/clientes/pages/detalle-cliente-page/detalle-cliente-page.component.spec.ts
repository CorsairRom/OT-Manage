import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClientePageComponent } from './detalle-cliente-page.component';

describe('DetalleClientePageComponent', () => {
  let component: DetalleClientePageComponent;
  let fixture: ComponentFixture<DetalleClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
