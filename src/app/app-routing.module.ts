import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Profile - Nikhil Kini',
    data: {
      desc: 'Profile Information Nikhil Kini',
    },
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Résumé - Nikhil Kini',
    data: {
      desc: 'Résumé Information Nikhil Kini',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
