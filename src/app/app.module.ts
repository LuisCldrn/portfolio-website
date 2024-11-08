import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { LanguagessecComponent } from './languagessec/languagessec.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import {TimelineModule} from 'primeng/timeline'
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AboutmeComponent,
    LanguagessecComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
