import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesPageComponent } from './configuraciones-page.component';

describe('ConfiguracionesPageComponent', () => {
  let component: ConfiguracionesPageComponent;
  let fixture: ComponentFixture<ConfiguracionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
