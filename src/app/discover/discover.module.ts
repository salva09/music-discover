import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiscoverComponent} from './discover.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DiscoverRoutingModule} from './discover-routing.module';

@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DiscoverModule { }
