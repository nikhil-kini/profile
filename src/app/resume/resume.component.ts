import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  public openPDF(): void {
    const pages = document.querySelector('.htmlData') as HTMLElement;
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: [960, 1400],
      putOnlyUsedFonts: true,
      floatPrecision: 16, // or "smart", default is 16
    });

    doc.html(pages, {
      callback: (doc: jsPDF) => {
        // doc.deletePage(doc.getNumberOfPages());
        doc.save('pdf-export');
      },
    });
  }
}
