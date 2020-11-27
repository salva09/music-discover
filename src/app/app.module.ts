import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import {enableProdMode} from '@angular/core';
enableProdMode();

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      AppRoutingModule,
      MatToolbarModule,
      MatIconModule,
    ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
