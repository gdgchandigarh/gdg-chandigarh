import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-genericevent',
  templateUrl: './genericevent.component.html',
  styleUrls: ['./genericevent.component.css']
})
export class GenericeventComponent  {
 
  constructor(private analytics: AngularFireAnalytics) {
    
  }
  ngOnInit(): void {
    this.analytics.logEvent('event_app_home', {"component": "EventComponent"});
  }
}
