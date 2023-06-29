import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGrupoUsuariosPageComponent } from './actualizar-grupo-usuarios-page.component';

describe('ActualizarGrupoUsuariosPageComponent', () => {
  let component: ActualizarGrupoUsuariosPageComponent;
  let fixture: ComponentFixture<ActualizarGrupoUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGrupoUsuariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarGrupoUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
