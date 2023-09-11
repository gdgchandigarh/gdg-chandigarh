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
import { EventHeaderComponent } from './events/layout/event-header/event-header.component';
import { AboutComponent } from './gdg-chandigarh/about/about.component';
import { DevfestComponent } from './events/devfest/devfest.component';
import { EventFooterComponent } from './events/layout/event-footer/event-footer.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';

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
    EventHeaderComponent,
    AboutComponent,
    DevfestComponent,
    EventFooterComponent,
    HomeComponent
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
