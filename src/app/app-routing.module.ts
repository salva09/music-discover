import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import {DiscoverComponent} from './discover/discover.component';
import {LikedComponent} from './liked/liked.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/discover' },
  { path: 'discover', component: DiscoverComponent },
  { path: 'liked', component: LikedComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
