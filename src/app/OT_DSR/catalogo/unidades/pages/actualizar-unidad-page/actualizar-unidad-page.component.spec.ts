import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUnidadPageComponent } from './actualizar-unidad-page.component';

describe('ActualizarUnidadPageComponent', () => {
  let component: ActualizarUnidadPageComponent;
  let fixture: ComponentFixture<ActualizarUnidadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUnidadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUnidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
