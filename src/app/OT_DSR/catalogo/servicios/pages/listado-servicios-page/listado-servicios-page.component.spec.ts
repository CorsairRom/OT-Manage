import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoServiciosPageComponent } from './listado-servicios-page.component';

describe('ListadoServiciosPageComponent', () => {
  let component: ListadoServiciosPageComponent;
  let fixture: ComponentFixture<ListadoServiciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoServiciosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoServiciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
