import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/discover' },
  { path: 'discover', loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule) },
  { path: 'liked', loadChildren: () => import('./liked/liked.module').then(m => m.LikedModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
