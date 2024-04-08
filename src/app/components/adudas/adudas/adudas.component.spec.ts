import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdudasComponent } from './adudas.component';

describe('AdudasComponent', () => {
  let component: AdudasComponent;
  let fixture: ComponentFixture<AdudasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdudasComponent]
    });
    fixture = TestBed.createComponent(AdudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
