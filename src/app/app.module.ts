import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DiscoverComponent } from './discover/discover.component';
import { LikedComponent } from './liked/liked.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    LikedComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        RouterModule.forRoot([
          { path: 'discover', component: DiscoverComponent },
          { path: 'liked', component: LikedComponent },
          { path: '', redirectTo: 'discover', pathMatch: 'full' }
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
