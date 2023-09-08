import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { EventsComponent } from './events/events.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: GdgChandigarhComponent },
  { path: 'events', component: EventsComponent },
  { path: 'organizers', component: OrganizersComponent},
  { path: 'upcoming-events', component: UpcomingEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
