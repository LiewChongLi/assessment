import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.route';
import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {DatePipe} from '@angular/common';

import '../assets/styles.scss';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false, enableTracing : false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
