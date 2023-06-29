import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductosPageComponent } from './listado-productos-page.component';

describe('ListadoProductosPageComponent', () => {
  let component: ListadoProductosPageComponent;
  let fixture: ComponentFixture<ListadoProductosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProductosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoProductosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
