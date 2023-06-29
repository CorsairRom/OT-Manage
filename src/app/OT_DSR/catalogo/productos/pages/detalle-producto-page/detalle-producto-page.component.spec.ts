import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoPageComponent } from './detalle-producto-page.component';

describe('DetalleProductoPageComponent', () => {
  let component: DetalleProductoPageComponent;
  let fixture: ComponentFixture<DetalleProductoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProductoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
