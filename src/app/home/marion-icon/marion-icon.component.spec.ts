import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarionIconComponent } from './marion-icon.component';

describe('MarionIconComponent', () => {
  let component: MarionIconComponent;
  let fixture: ComponentFixture<MarionIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarionIconComponent]
    });
    fixture = TestBed.createComponent(MarionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
