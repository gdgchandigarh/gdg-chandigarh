import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdgChandigarhComponent } from './gdg-chandigarh/gdg-chandigarh.component';
import { OrganizersComponent } from './gdg-chandigarh/organizers/organizers.component';
import { UpcomingEventsComponent } from './gdg-chandigarh/upcoming-events/upcoming-events.component';
import { AboutComponent } from './gdg-chandigarh/about/about.component';
import { DevfestComponent } from './events/devfest/devfest.component';
import { EventLayoutComponent } from './events/layout/event-layout/event-layout.component';
import { HomeComponent } from './gdg-chandigarh/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/gdg-chandigarh/home', pathMatch: 'full' },
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
      { path: 'devfest', component: DevfestComponent},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
