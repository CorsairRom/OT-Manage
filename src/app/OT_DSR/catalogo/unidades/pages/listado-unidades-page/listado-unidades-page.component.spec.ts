import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUnidadesPageComponent } from './listado-unidades-page.component';

describe('ListadoUnidadesPageComponent', () => {
  let component: ListadoUnidadesPageComponent;
  let fixture: ComponentFixture<ListadoUnidadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoUnidadesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoUnidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
