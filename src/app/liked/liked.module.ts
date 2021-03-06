import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikedComponent} from './liked.component';
import {LikedtRoutingModule} from './liked-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    LikedComponent
  ],
  imports: [
    CommonModule,
    LikedtRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ CookieService ],
})
export class LikedModule { }
