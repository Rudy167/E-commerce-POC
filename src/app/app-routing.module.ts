import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { ContentComponent } from './+home/content/content.component';
import { FilterContentComponent } from './+home/filter-content/filter-content.component';

const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'filter', component: FilterContentComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
