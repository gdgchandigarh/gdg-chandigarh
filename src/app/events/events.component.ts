import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    
  }

 isLoading: boolean = true;

  ngOnInit(): void {
    this.analytics.logEvent('event_home_open', {"component": "EventComponent"});
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Adjust the delay as needed
  }

}
