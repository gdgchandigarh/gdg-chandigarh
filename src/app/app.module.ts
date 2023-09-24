import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './gdg-chandigarh/header/header.component';
import { NavbarComponent } from './gdg-chandigarh/navbar/navbar.component';
import { HeaderSectionComponent } from './gdg-chandigarh/header-section/header-section.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';
import { EventCardComponent } from './gdg-chandigarh/event-card/event-card.component';
import { PastEventsComponent } from './gdg-chandigarh/past-events/past-events.component';
import { PartnersComponent } from './gdg-chandigarh/partners/partners.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { FooterComponent } from './gdg-chandigarh/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal'; // Import ModalModule
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';
import { AboutComponent } from './gdg-chandigarh/about/about.component';
import { EventFooterComponent } from './events/layout/event-footer/event-footer.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';
import { GenericeventComponent } from './events/genericevent/genericevent.component';
import { EventHeaderComponent } from './events/layout/event-header/event-header.component';
import { EventSpeakerComponent } from './events/event-speaker/event-speaker.component';
import { EventAgendaComponent } from './events/event-agenda/event-agenda.component';
import { EventTeamComponent } from './events/event-team/event-team.component';
import { EventFaqComponent } from './events/event-faq/event-faq.component';
import { RegistrationComponent } from './gdg-chandigarh/upcoming-events/registration/registration.component';
import { AboutDevfestComponent } from './events/genericevent/about-devfest/about-devfest.component';
import { StayUpdatedComponent } from './events/genericevent/stay-updated/stay-updated.component';
import { KeepInTouchComponent } from './events/genericevent/keep-in-touch/keep-in-touch.component';
import { WhatToExpectComponent } from './events/genericevent/what-to-expect/what-to-expect.component';
import { SponsorsComponent } from './events/genericevent/sponsors/sponsors.component';
import { FeaturedProductsComponent } from './events/genericevent/featured-products/featured-products.component';
import { HelpfulResourcesComponent } from './events/genericevent/helpful-resources/helpful-resources.component';
import { CounterHeaderComponent } from './events/genericevent/counter-header/counter-header.component';
import { DateCounterComponent } from './events/genericevent/date-counter/date-counter.component';
import { EventSponsorsComponent } from './events/event-sponsors/event-sponsors.component';
import { AttendeesComponent } from './events/genericevent/attendees/attendees.component';
import { EventHighlightsComponent } from './events/genericevent/event-highlights/event-highlights.component';
import { EventPageHeaderComponent } from './events/layout/event-page-header/event-page-header.component';
import { ComingSoonComponent } from './events/layout/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderSectionComponent,
    UpcomingEventsComponent,
    EventCardComponent,
    PastEventsComponent,
    PartnersComponent,
    OrganizersComponent,
    FooterComponent,
    GdgChandigarhComponent,
    EventsComponent,
    EventLayoutComponent,
    AboutComponent,
    EventFooterComponent,
    HomeComponent,
    GenericeventComponent,
    EventHeaderComponent,
    EventSpeakerComponent,
    EventAgendaComponent,
    EventTeamComponent,
    EventFaqComponent,
    AboutDevfestComponent,
    StayUpdatedComponent,
    KeepInTouchComponent,
    WhatToExpectComponent,
    RegistrationComponent,
    SponsorsComponent,
    FeaturedProductsComponent,
    HelpfulResourcesComponent,
    CounterHeaderComponent,
    DateCounterComponent,
    EventSponsorsComponent,
    AttendeesComponent,
    EventHighlightsComponent,
    EventPageHeaderComponent,
    ComingSoonComponent
   
  ],
  imports: [
    BrowserModule,
     ModalModule.forRoot(), // Add ModalModule to imports
    AppRoutingModule,
    FormsModule, // Make sure to import FormsModule
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
