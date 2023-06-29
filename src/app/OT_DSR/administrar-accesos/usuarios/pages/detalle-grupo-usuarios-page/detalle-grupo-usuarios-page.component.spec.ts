import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGrupoUsuariosPageComponent } from './detalle-grupo-usuarios-page.component';

describe('DetalleGrupoUsuariosPageComponent', () => {
  let component: DetalleGrupoUsuariosPageComponent;
  let fixture: ComponentFixture<DetalleGrupoUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleGrupoUsuariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleGrupoUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
