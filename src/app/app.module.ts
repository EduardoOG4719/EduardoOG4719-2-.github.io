import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperiencieComponent } from './work-experiencie/work-experiencie.component';
import { EducationComponent } from './education/education.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { LogrosComponent } from './logros/logros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperiencieComponent,
    EducationComponent,
    IdiomasComponent,
    HabilidadesComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }