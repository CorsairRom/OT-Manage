import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClientesPageComponent } from './listado-clientes-page.component';

describe('ListadoClientesPageComponent', () => {
  let component: ListadoClientesPageComponent;
  let fixture: ComponentFixture<ListadoClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoClientesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
