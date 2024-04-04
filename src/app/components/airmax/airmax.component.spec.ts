import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirmaxComponent } from './airmax.component';

describe('AirmaxComponent', () => {
  let component: AirmaxComponent;
  let fixture: ComponentFixture<AirmaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirmaxComponent]
    });
    fixture = TestBed.createComponent(AirmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
