import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOrdenesTrabajoPageComponent } from './listado-ordenes-trabajo-page.component';

describe('ListadoOrdenesTrabajoPageComponent', () => {
  let component: ListadoOrdenesTrabajoPageComponent;
  let fixture: ComponentFixture<ListadoOrdenesTrabajoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoOrdenesTrabajoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoOrdenesTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
