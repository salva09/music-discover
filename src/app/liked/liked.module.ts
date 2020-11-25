import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikedComponent} from './liked.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LikedtRoutingModule} from './liked-routing.module';

@NgModule({
  declarations: [
    LikedComponent
  ],
  imports: [
    CommonModule,
    LikedtRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class LikedModule { }
