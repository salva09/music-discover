import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule),
  },
  {
    path: 'liked',
    loadChildren: () => import('./liked/liked.module').then(m => m.LikedModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/discover'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
