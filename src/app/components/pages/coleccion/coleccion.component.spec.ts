import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionComponent } from './coleccion.component';

describe('ColeccionComponent', () => {
  let component: ColeccionComponent;
  let fixture: ComponentFixture<ColeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionComponent]
    });
    fixture = TestBed.createComponent(ColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
