import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFacturasPageComponent } from './listado-facturas-page.component';

describe('ListadoFacturasPageComponent', () => {
  let component: ListadoFacturasPageComponent;
  let fixture: ComponentFixture<ListadoFacturasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFacturasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoFacturasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
