import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrdenesTrabajoPageComponent } from './registro-ordenes-trabajo-page.component';

describe('RegistroOrdenesTrabajoPageComponent', () => {
  let component: RegistroOrdenesTrabajoPageComponent;
  let fixture: ComponentFixture<RegistroOrdenesTrabajoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOrdenesTrabajoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOrdenesTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
