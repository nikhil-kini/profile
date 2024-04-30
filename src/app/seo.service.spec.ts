import { TestBed } from '@angular/core/testing';

import { SEOService } from './seo.service';
import { Meta } from '@angular/platform-browser';

describe('SEOService', () => {
  let service: SEOService;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEOService);
    meta = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dynamic disctiption', () => {
    service.updateDescription('hello');

    expect(meta.getTag("content='hello'")?.content).toBe('hello');
  });
});
