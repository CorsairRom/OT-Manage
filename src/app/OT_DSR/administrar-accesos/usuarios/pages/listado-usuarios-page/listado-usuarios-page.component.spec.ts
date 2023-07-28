import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosPageComponent } from './listado-usuarios-page.component';

describe('ListadoUsuariosPageComponent', () => {
  let component: ListadoUsuariosPageComponent;
  let fixture: ComponentFixture<ListadoUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoUsuariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
