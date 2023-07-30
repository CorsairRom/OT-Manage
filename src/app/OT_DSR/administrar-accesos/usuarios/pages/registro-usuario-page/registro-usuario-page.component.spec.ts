import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioPageComponent } from './registro-usuario-page.component';

describe('RegistroUsuarioPageComponent', () => {
  let component: RegistroUsuarioPageComponent;
  let fixture: ComponentFixture<RegistroUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
