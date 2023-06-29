import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuarioPageComponent } from './detalle-usuario-page.component';

describe('DetalleUsuarioPageComponent', () => {
  let component: DetalleUsuarioPageComponent;
  let fixture: ComponentFixture<DetalleUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUsuarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
