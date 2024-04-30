import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private meta: Meta) {}

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }
}
