import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarServicioPageComponent } from './actualizar-servicio-page.component';

describe('ActualizarServicioPageComponent', () => {
  let component: ActualizarServicioPageComponent;
  let fixture: ComponentFixture<ActualizarServicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarServicioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarServicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
