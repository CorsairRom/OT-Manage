import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFabricantesPageComponent } from './listado-fabricantes-page.component';

describe('ListadoFabricantesPageComponent', () => {
  let component: ListadoFabricantesPageComponent;
  let fixture: ComponentFixture<ListadoFabricantesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFabricantesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoFabricantesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
