import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaServiciosComponent } from './tabla-servicios.component';

describe('TablaServiciosComponent', () => {
  let component: TablaServiciosComponent;
  let fixture: ComponentFixture<TablaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
