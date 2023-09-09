import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { EventsComponent } from './events/events.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';
import { DevfestComponent } from './events/devfest/devfest.component';
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/gdg-chandigarh', pathMatch: 'full' },
  { 
    path: 'gdg-chandigarh', 
    component: GdgChandigarhComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'organizers', component: OrganizersComponent},
      { path: 'upcoming-events', component: UpcomingEventsComponent}
    ]  
  },
  { 
    path: 'events', 
    component: EventLayoutComponent,
    children: [
      { path: 'devfest', component: DevfestComponent},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
