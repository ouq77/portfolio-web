import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

// Components / Pipes
import {AboutComponent} from './about/components/about';
import {AppComponent} from './app/components/app';
import {ContactComponent} from './contact/components/contact';
import {ContactFormComponent} from './contact/components/contact.form';
import {ContactMapComponent} from './contact/components/contact.gmap';
import {EducationComponent} from './education/components/education';
import {ExperienceComponent} from './experience/components/experience';
import {FooterComponent} from './footer/components/footer';
import {HeaderComponent} from './header/components/header';
import {SkillsComponent} from './skills/components/skills';

// Pipes
import {BadgeUrlPipe, MemberDatePipe, ScorePipe, TrimPipe, VideoUrlPipe} from './shared/common/pipes';

// Services
import {AppService} from './app/services/app';
import {ContactService} from './contact/services/contact';
import {EducationService} from './education/services/education';
import {ExperienceService} from './experience/services/experience';
import {FooterService} from './footer/services/footer';
import {HeaderService} from './header/services/header';
import {SkillService} from './skills/services/skills';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    // Components
    AboutComponent,
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    // Pipes
    BadgeUrlPipe,
    MemberDatePipe,
    ScorePipe,
    TrimPipe,
    VideoUrlPipe,
  ],
  exports: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    FormBuilder,
    AppService,
    ContactService,
    EducationService,
    ExperienceService,
    FooterService,
    HeaderService,
    SkillService,
  ],
})

export class AppModule {
}
