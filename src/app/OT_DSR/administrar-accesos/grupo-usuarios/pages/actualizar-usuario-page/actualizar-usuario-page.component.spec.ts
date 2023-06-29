import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuarioPageComponent } from './actualizar-usuario-page.component';

describe('ActualizarUsuarioPageComponent', () => {
  let component: ActualizarUsuarioPageComponent;
  let fixture: ComponentFixture<ActualizarUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUsuarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
