import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarClientePageComponent } from './actualizar-cliente-page.component';

describe('ActualizarClientePageComponent', () => {
  let component: ActualizarClientePageComponent;
  let fixture: ComponentFixture<ActualizarClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarClientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
