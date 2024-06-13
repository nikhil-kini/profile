import { Component, HostListener } from '@angular/core';
import { experience } from '../01_data/experiance_data';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('title-fadeAway', [
      state(
        'in',
        style({
          transform: 'scale(1) translate3d(0px, 0px, 0px)',
          opacity: 1,
          filter: 'blur(0px)',
        })
      ),
      transition('void => *', [
        style({
          transform: 'scale(1) translate3d(0px, -100px, 0px)',
          opacity: 0,
          filter: 'blur(14px)',
        }),
        animate('0.7s cubic-bezier(0.21, 0.33, 0.45, 0.86)'),
      ]),
    ]),
  ],
})
export class HomeComponent {
  exp_data = experience;

  maxScroll = 500;
  scaleExtent = 40;
  blurExtent = 20;
  viewportFromTop = 0;

  opacity = 0;
  scale = 1;
  blur = 0;
  scrollStyle = {
    transform: 'scale(1) translate3d(0, 0, 0)',
    opacity: this.opacity,
    filter: 'blur(' + this.blur + 'px)',
  };

  ngOnInit() {
    this.reveal();
  }

  @HostListener('window:scroll', [])
  reveal() {
    this.viewportFromTop = window.scrollY;
    if (this.viewportFromTop <= this.maxScroll) {
      this.opacity = 1;

      //preparing scale transform
      this.scale =
        1 - this.viewportFromTop / (this.maxScroll * this.scaleExtent);

      //preparing opacity
      this.opacity = 1 - this.viewportFromTop / this.maxScroll;

      //preparing blur
      if (this.viewportFromTop > 100) {
        this.blur =
          (this.viewportFromTop * this.blurExtent) / this.maxScroll - 5;
      } else {
        this.blur = 0;
      }
    } else {
      this.opacity = 0;
    }
    this.scrollStyle = {
      transform: 'scale(' + this.scale + ') translate3d(0, 0, 0)',
      opacity: this.opacity,
      filter: 'blur(' + this.blur + 'px)',
    };
  }
}
