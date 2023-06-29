import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFacturasPageComponent } from './registro-facturas-page.component';

describe('RegistroFacturasPageComponent', () => {
  let component: RegistroFacturasPageComponent;
  let fixture: ComponentFixture<RegistroFacturasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFacturasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFacturasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
