import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFabricantePageComponent } from './detalle-fabricante-page.component';

describe('DetalleFabricantePageComponent', () => {
  let component: DetalleFabricantePageComponent;
  let fixture: ComponentFixture<DetalleFabricantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFabricantePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFabricantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
