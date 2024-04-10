import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCarruselComponent } from './mostrar-carrusel.component';

describe('MostrarCarruselComponent', () => {
  let component: MostrarCarruselComponent;
  let fixture: ComponentFixture<MostrarCarruselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCarruselComponent]
    });
    fixture = TestBed.createComponent(MostrarCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
