import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LikedComponent } from './liked.component';

const routes: Routes = [
  { path: '', component: LikedComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LikedtRoutingModule {
  static components = [ LikedComponent ];
}
