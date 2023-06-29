import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFabricantePageComponent } from './registro-fabricante-page.component';

describe('RegistroFabricantePageComponent', () => {
  let component: RegistroFabricantePageComponent;
  let fixture: ComponentFixture<RegistroFabricantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFabricantePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFabricantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
