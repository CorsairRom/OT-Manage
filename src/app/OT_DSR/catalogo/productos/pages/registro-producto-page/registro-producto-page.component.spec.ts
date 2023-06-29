import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductoPageComponent } from './registro-producto-page.component';

describe('RegistroProductoPageComponent', () => {
  let component: RegistroProductoPageComponent;
  let fixture: ComponentFixture<RegistroProductoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProductoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
