import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PocStorybookLibModule } from 'poc-storybook-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PocStorybookLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
