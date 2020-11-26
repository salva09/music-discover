import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiscoverComponent} from './discover.component';
import {DiscoverRoutingModule} from './discover-routing.module';

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ CookieService ],
})
export class DiscoverModule { }
