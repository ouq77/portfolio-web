import { AgmCoreModule } from '@agm/core'
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image'
import { NguiInviewModule } from '@ngui/common'
import { environment } from '../environments/environment'

// Components
import { AppComponent } from './components/app'
import { AboutComponent } from './components/about/components/about'
import { ContactComponent } from './components/contact/components/contact'
import { ContactFormComponent } from './components/contact/components/contact.form'
import { EducationComponent } from './components/education/components/education'
import { ExperienceComponent } from './components/experience/components/experience'
import { FooterComponent } from './components/footer/components/footer'
import { HeaderComponent } from './components/header/components/header'
import { SkillsComponent } from './components/skills/components/skills'
import { TravelComponent } from './components/travel/components/travel'
import { TravelMapComponent } from './components/travel/components/travel.gmap'

// Pipes
import { BadgeUrlPipe, MemberDatePipe, ScorePipe, TrimPipe, VideoUrlPipe } from './components/shared/common/pipes'

// Services
import { AppService } from './services/app'
import { ContactService } from './components/contact/services/contact'
import { EducationService } from './components/education/services/education'
import { ExperienceService } from './components/experience/services/experience'
import { FooterService } from './components/footer/services/footer'
import { HeaderService } from './components/header/services/header'
import { initMapApi, MapApiLoaderService } from './services/map-api-loader.service'
import { SkillService } from './components/skills/services/skills'
import { TravelService } from './components/travel/service/travel'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    // Components
    AboutComponent,
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    TravelComponent,
    TravelMapComponent,
    // Pipes
    BadgeUrlPipe,
    MemberDatePipe,
    ScorePipe,
    TrimPipe,
    VideoUrlPipe,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google.mapsApiKey,
    }),
    BrowserModule,
    CommonModule,
    FormsModule,
    LazyLoadImageModule.forRoot(ScrollHooks),
    HttpClientModule,
    NguiInviewModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initMapApi,
      deps: [MapApiLoaderService],
      multi: true,
    },
    AppService,
    ContactService,
    EducationService,
    ExperienceService,
    FooterService,
    FormBuilder,
    HeaderService,
    MapApiLoaderService,
    SkillService,
    TravelService,
  ],
})
export class AppModule { }
