import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGrupoUsuariosPageComponent } from './registro-grupo-usuarios-page.component';

describe('RegistroGrupoUsuariosPageComponent', () => {
  let component: RegistroGrupoUsuariosPageComponent;
  let fixture: ComponentFixture<RegistroGrupoUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroGrupoUsuariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroGrupoUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
