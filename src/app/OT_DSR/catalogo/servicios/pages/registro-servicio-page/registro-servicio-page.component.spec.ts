import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServicioPageComponent } from './registro-servicio-page.component';

describe('RegistroServicioPageComponent', () => {
  let component: RegistroServicioPageComponent;
  let fixture: ComponentFixture<RegistroServicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroServicioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroServicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
