import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClientePageComponent } from './registro-cliente-page.component';

describe('RegistroClientePageComponent', () => {
  let component: RegistroClientePageComponent;
  let fixture: ComponentFixture<RegistroClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroClientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
