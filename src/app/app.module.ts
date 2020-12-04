import { AgmCoreModule } from '@agm/core'
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NguiInviewModule } from '@ngui/common'
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image'

import { environment } from '../environments/environment'

import { AboutComponent } from './components/about/components/about'
import { AppComponent } from './components/app'
import { ContactComponent } from './components/contact/components/contact'
import { ContactFormComponent } from './components/contact/components/contact.form'
import { ContactService } from './components/contact/services/contact'
import { EducationComponent } from './components/education/components/education'
import { EducationService } from './components/education/services/education'
import { ExperienceComponent } from './components/experience/components/experience'
import { ExperienceService } from './components/experience/services/experience'
import { FooterComponent } from './components/footer/components/footer'
import { FooterService } from './components/footer/services/footer'
import { HeaderComponent } from './components/header/components/header'
import { HeaderService } from './components/header/services/header'
import { BadgeUrlPipe, MemberDatePipe, ScorePipe, TrimPipe, VideoUrlPipe } from './components/shared/common/pipes'
import { TravelComponent } from './components/travel/components/travel'
import { TravelMapComponent } from './components/travel/components/travel.gmap'
import { TravelService } from './components/travel/service/travel'
import { AppService } from './services/app'
import { initMapApi, MapApiLoaderService } from './services/map-api-loader.service'

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
    LazyLoadImageModule,
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
    {
      provide: LAZYLOAD_IMAGE_HOOKS,
      useClass: ScrollHooks,
    },
    AppService,
    ContactService,
    EducationService,
    ExperienceService,
    FooterService,
    FormBuilder,
    HeaderService,
    MapApiLoaderService,
    TravelService,
  ],
})
export class AppModule { }
