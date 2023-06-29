import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenesTrabajoPageComponent } from './detalle-ordenes-trabajo-page.component';

describe('DetalleOrdenesTrabajoPageComponent', () => {
  let component: DetalleOrdenesTrabajoPageComponent;
  let fixture: ComponentFixture<DetalleOrdenesTrabajoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOrdenesTrabajoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleOrdenesTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
