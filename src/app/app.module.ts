import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToastModule } from 'toast-service';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
