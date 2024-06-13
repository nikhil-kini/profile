import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolanaIconComponent } from './polana-icon.component';

describe('PolanaIconComponent', () => {
  let component: PolanaIconComponent;
  let fixture: ComponentFixture<PolanaIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolanaIconComponent]
    });
    fixture = TestBed.createComponent(PolanaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
