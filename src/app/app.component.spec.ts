import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as isDarkEnable 'True'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDarkEnable).toBe(true);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Nikhil Kini');
  });

  it('should change Theme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.presentTheme$.value)
      .withContext('present theme with change')
      .toBe('theme-dark');
    expect(app.isDarkEnable).withContext('isDark').toBe(true);

    app.changeTheme();

    expect(app.presentTheme$.value)
      .withContext('present theme with change')
      .toBe('theme-light');
    expect(app.isDarkEnable).withContext('isDark').toBe(false);
    expect(localStorage.getItem('theme'))
      .withContext('storage theme')
      .toBe('theme-light');

    app.changeTheme();

    expect(app.presentTheme$.value)
      .withContext('present theme with change 2')
      .toBe('theme-dark');
    expect(app.isDarkEnable).withContext('isDark').toBe(true);
    expect(localStorage.getItem('theme'))
      .withContext('storage theme dark')
      .toBe('theme-dark');
  });

  it('should show Hamburger', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.isHamburgerMenuOpen)
      .withContext('isHamburger first')
      .toBe(false);
    app.showHamburgerMenu();
    expect(app.isHamburgerMenuOpen)
      .withContext('isHamburger second')
      .toBe(true);
  });

  it('should show toggle Contact', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.isContactOpen).withContext('isContact first').toBe(false);
    app.toggleContactModal();
    expect(app.isContactOpen).withContext('isContact second').toBe(true);
    app.showHamburgerMenu();
    app.toggleContactModal();
    expect(app.isContactOpen).withContext('isContact third').toBe(false);
    expect(app.isHamburgerMenuOpen)
      .withContext('isHamburger second')
      .toBe(false);
  });
});
