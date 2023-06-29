import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFabricantePageComponent } from './actualizar-fabricante-page.component';

describe('ActualizarFabricantePageComponent', () => {
  let component: ActualizarFabricantePageComponent;
  let fixture: ComponentFixture<ActualizarFabricantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarFabricantePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFabricantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
