import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }
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
