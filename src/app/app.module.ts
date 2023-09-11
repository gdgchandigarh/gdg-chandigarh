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
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';
import { AboutComponent } from './gdg-chandigarh/about/about.component';
import { EventFooterComponent } from './events/layout/event-footer/event-footer.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';
import { GenericeventComponent } from './events/genericevent/genericevent.component';
import { EventHeaderComponent } from './events/layout/event-header/event-header.component';
import { EventSpeakerComponent } from './events/event-speaker/event-speaker.component';
import { EventOrganizerComponent } from './events/event-organizer/event-organizer.component';
import { EventAgendaComponent } from './events/event-agenda/event-agenda.component';
import { EventTeamComponent } from './events/event-team/event-team.component';
import { EventFaqComponent } from './events/event-faq/event-faq.component';

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
    EventOrganizerComponent,
    EventAgendaComponent,
    EventTeamComponent,
    EventFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Make sure to import FormsModule
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
