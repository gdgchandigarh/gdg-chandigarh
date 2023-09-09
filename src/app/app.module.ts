import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './gdg-chandigarh/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderSectionComponent } from './gdg-chandigarh/header-section/header-section.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';
import { EventCardComponent } from './gdg-chandigarh/event-card/event-card.component';
import { PastEventsComponent } from './gdg-chandigarh/past-events/past-events.component';
import { PartnersComponent } from './gdg-chandigarh/partners/partners.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { FooterComponent } from './gdg-chandigarh/footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';
import { EventHeaderComponent } from './events/layout/event-header/event-header.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';
import { DevfestComponent } from './events/devfest/devfest.component';
import { EventFooterComponent } from './events/layout/event-footer/event-footer.component';

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
    HomeComponent,
    DevfestComponent,
    EventFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Make sure to import FormsModule
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
