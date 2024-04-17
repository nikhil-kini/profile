import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { PoppinsEncoded } from 'src/assets/Poppins-Regular-Encoded';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
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
    doc.setFont('Open Sans', 'normal');
    console.log(doc.getFontList());
    console.log(doc.getFont());

    doc.html(pages, {
      x: margin,
      y: 0,
      html2canvas: {
        scale: scale, // default is window.devicePixelRatio,
      },
      callback: (doc: jsPDF) => {
        // doc.deletePage(doc.getNumberOfPages());
        doc.save('Nikhil Kini - Résumé');
      },
    });
  }
}
