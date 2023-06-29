import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrdenesTrabajoPageComponent } from './actualizar-ordenes-trabajo-page.component';

describe('ActualizarOrdenesTrabajoPageComponent', () => {
  let component: ActualizarOrdenesTrabajoPageComponent;
  let fixture: ComponentFixture<ActualizarOrdenesTrabajoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarOrdenesTrabajoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarOrdenesTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
