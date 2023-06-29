import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReporteOtPageComponent } from './registro-reporte-ot-page.component';

describe('RegistroReporteOtPageComponent', () => {
  let component: RegistroReporteOtPageComponent;
  let fixture: ComponentFixture<RegistroReporteOtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroReporteOtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroReporteOtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
