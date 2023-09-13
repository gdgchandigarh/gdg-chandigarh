import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';
import { AboutComponent } from './gdg-chandigarh/about/about.component';
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';
import { GenericeventComponent } from './events/genericevent/genericevent.component';
import { EventSpeakerComponent } from './events/event-speaker/event-speaker.component';
import { EventOrganizerComponent } from './events/event-organizer/event-organizer.component';
import { EventAgendaComponent } from './events/event-agenda/event-agenda.component';
import { EventFaqComponent } from './events/event-faq/event-faq.component';
import { EventTeamComponent } from './events/event-team/event-team.component';

const eventType= 'devfest';
const routes: Routes = [
  { path: '', redirectTo: '/gdg-chandigarh/home', pathMatch: 'full' },
  { path: 'events', redirectTo: `events/${eventType}/home`, pathMatch: 'full' },
  { 
    path: 'gdg-chandigarh', 
    component: GdgChandigarhComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'organizers', component: OrganizersComponent},
      { path: 'upcoming-events', component: UpcomingEventsComponent}
    ]  
  },
  { 
    path: 'events', 
    component: EventLayoutComponent,
    children: [
      { path: `${eventType}/home`, component: GenericeventComponent},
      { path: 'devfest/speaker', component: EventSpeakerComponent},
      { path: 'devfest/organizer', component: EventOrganizerComponent},
      { path: 'devfest/agenda', component: EventAgendaComponent},
      { path: 'devfest/faq', component: EventFaqComponent},
      { path: 'devfest/teams', component: EventTeamComponent},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
