import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-counter-header',
  templateUrl: './counter-header.component.html',
  styleUrls: ['./counter-header.component.css']
})
export class CounterHeaderComponent {
  eventGif = '../../../assets/event-gif.gif'
  eventDate = `December 9, 2023`;
  eventTime = `9:00 AM - 5:00 PM`;
 
  constructor(private analytics: AngularFireAnalytics) {
  }

  onRegisterClick() {
    this.analytics.logEvent('register_button_click', {"component": "EventComponent"});
  }
}
