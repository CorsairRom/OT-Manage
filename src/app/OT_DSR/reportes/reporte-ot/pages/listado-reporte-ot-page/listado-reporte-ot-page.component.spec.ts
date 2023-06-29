import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReporteOtPageComponent } from './listado-reporte-ot-page.component';

describe('ListadoReporteOtPageComponent', () => {
  let component: ListadoReporteOtPageComponent;
  let fixture: ComponentFixture<ListadoReporteOtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoReporteOtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReporteOtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
