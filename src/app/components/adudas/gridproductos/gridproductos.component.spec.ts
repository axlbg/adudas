import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridproductosComponent } from './gridproductos.component';

describe('GridproductosComponent', () => {
  let component: GridproductosComponent;
  let fixture: ComponentFixture<GridproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridproductosComponent]
    });
    fixture = TestBed.createComponent(GridproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
