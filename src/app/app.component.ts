import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SEOService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHamburgerMenuOpen = false;
  isDarkEnable = true;
  isContactOpen = false;
  presentTheme$ = new BehaviorSubject<string>('theme-dark');

  constructor(
    private router: Router,
    private _seoService: SEOService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this._seoService.updateDescription(event['desc']);
      });
  }

  changeTheme() {
    this.presentTheme$.value === 'theme-light'
      ? this.presentTheme$.next('theme-dark')
      : this.presentTheme$.next('theme-light');
    localStorage.setItem('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }

  showHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }

  toggleContactModal() {
    this.isContactOpen = !this.isContactOpen;
    if (this.isHamburgerMenuOpen) {
      this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
    }
    if (this.isContactOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
