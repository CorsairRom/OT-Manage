import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProductoPageComponent } from './actualizar-producto-page.component';

describe('ActualizarProductoPageComponent', () => {
  let component: ActualizarProductoPageComponent;
  let fixture: ComponentFixture<ActualizarProductoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProductoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
