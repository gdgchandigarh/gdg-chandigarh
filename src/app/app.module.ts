import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { PartnersComponent } from './components/partners/partners.component';
import { OrganizersComponent } from './components/organizers/organizers.component';
import { YoutubeSectionComponent } from './components/youtube-section/youtube-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderSectionComponent,
    AboutSectionComponent,
    UpcomingEventsComponent,
    EventCardComponent,
    PastEventsComponent,
    PartnersComponent,
    OrganizersComponent,
    YoutubeSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
