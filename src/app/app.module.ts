import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperiencieComponent } from './work-experiencie/work-experiencie.component';
import { EducationComponent } from './education/education.component';
import { IdiomasComponent } from './idiomas/idiomas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperiencieComponent,
    EducationComponent,
    IdiomasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }