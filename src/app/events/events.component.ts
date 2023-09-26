import { Component } from '@angular/core';
import {AngularFireAnalytics, AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
 constructor(private analytics: AngularFireAnalytics){
  this.analytics.logEvent('event_home_page', {"component": "EventComponent"});
 }
}
