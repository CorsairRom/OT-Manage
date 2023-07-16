import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUnidadesComponent } from './tabla-unidades.component';

describe('TablaUnidadesComponent', () => {
  let component: TablaUnidadesComponent;
  let fixture: ComponentFixture<TablaUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
