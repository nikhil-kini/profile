import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, InjectionToken, inject } from '@angular/core';
import jsPDF from 'jspdf';
import { PoppinsEncoded } from 'src/assets/Poppins-Regular-Encoded';
import { experience } from '../01_data/experiance_data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('titleAnim', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-20%)',
        }),
        animate('0.7s cubic-bezier(0.21, 0.33, 0.45, 0.86)'),
      ]),
    ]),
    trigger('upAnim', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-10%)',
        }),
        animate('0.6s cubic-bezier(0.21, 0.33, 0.45, 0.86)'),
      ]),
    ]),
    trigger('rightAnim', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(40%)',
        }),
        animate('0.6s cubic-bezier(0.21, 0.33, 0.45, 0.86)'),
      ]),
    ]),
  ],
})
export class ResumeComponent {
  exp_data = experience;
  constructor() {}
  public openPDF(): void {
    let margin = 36;

    let pages = document.querySelector('.htmlData') as HTMLElement;
    let srcwidth = pages.scrollWidth;
    let scale = (595.28 - margin * 2) / srcwidth;
    let doc = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16, // or "smart", default is 16
    });

    doc.addFileToVFS('Poppins-Regular.ttf', PoppinsEncoded);
    doc.addFont('Poppins-Regular.ttf', 'Poppins', 'normal');
    doc.setFont('Poppins', 'normal');

    doc.html(pages, {
      x: margin,
      y: 0,
      html2canvas: {
        scale: scale, // default is window.devicePixelRatio,
      },
      callback: (doc: jsPDF) => {
        doc.save('Nikhil Kini - Résumé');
      },
    });
  }
}
