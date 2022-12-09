import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperiencieComponent } from './work-experiencie/work-experiencie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperiencieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }