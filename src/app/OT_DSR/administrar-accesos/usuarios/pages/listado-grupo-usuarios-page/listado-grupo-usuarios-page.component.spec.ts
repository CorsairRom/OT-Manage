import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGrupoUsuariosPageComponent } from './listado-grupo-usuarios-page.component';

describe('ListadoGrupoUsuariosPageComponent', () => {
  let component: ListadoGrupoUsuariosPageComponent;
  let fixture: ComponentFixture<ListadoGrupoUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGrupoUsuariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGrupoUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
