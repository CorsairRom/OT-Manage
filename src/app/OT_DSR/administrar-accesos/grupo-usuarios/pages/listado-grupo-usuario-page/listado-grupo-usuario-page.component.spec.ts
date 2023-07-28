import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGrupoUsuarioPageComponent } from './listado-grupo-usuario-page.component';

describe('ListadoGrupoUsuarioPageComponent', () => {
  let component: ListadoGrupoUsuarioPageComponent;
  let fixture: ComponentFixture<ListadoGrupoUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGrupoUsuarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGrupoUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
