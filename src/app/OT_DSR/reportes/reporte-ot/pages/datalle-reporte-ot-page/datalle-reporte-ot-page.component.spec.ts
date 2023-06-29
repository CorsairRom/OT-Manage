import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalleReporteOtPageComponent } from './datalle-reporte-ot-page.component';

describe('DatalleReporteOtPageComponent', () => {
  let component: DatalleReporteOtPageComponent;
  let fixture: ComponentFixture<DatalleReporteOtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalleReporteOtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatalleReporteOtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
