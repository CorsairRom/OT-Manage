import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUnidadPageComponent } from './registro-unidad-page.component';

describe('RegistroUnidadPageComponent', () => {
  let component: RegistroUnidadPageComponent;
  let fixture: ComponentFixture<RegistroUnidadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUnidadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUnidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
