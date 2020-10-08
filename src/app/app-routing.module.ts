import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { EditorComponent } from './editor/editor.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'editor',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
  {
    path:'editor',
    component:EditorComponent
  },
  {
    path:'coverletter',
    component:CoverLetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
