import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoblecoleccionComponent } from './doblecoleccion.component';

describe('DoblecoleccionComponent', () => {
  let component: DoblecoleccionComponent;
  let fixture: ComponentFixture<DoblecoleccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoblecoleccionComponent]
    });
    fixture = TestBed.createComponent(DoblecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
