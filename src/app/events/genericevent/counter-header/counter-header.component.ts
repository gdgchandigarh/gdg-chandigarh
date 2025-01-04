// import { Component } from '@angular/core';
// import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

// @Component({
//   selector: 'app-counter-header',
//   templateUrl: './counter-header.component.html',
//   styleUrls: ['./counter-header.component.css']
// })
// export class CounterHeaderComponent {
//   eventGif = '../../../assets/event-gif.gif'
//   eventDate = `December 15, 2024`;
//   eventTime = `9:00 AM - 5:00 PM`;
//   eventLocation=`Chandigarh University, Punjab`
 
//   constructor(private analytics: AngularFireAnalytics) {
//   }

//   onRegisterClick() {
//     this.analytics.logEvent('register_button_click', {"component": "EventComponent"});
//   }
// }


import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-counter-header',
  templateUrl: './counter-header.component.html',
  styleUrls: ['./counter-header.component.css']
})
export class CounterHeaderComponent {
  eventGif = '../../../assets/event-gif.gif';
  eventDate = 'December 15, 2024';
  eventTime = '9:00 AM - 5:00 PM';
  eventLocation = 'Chandigarh University, Punjab';

  showModal = false; // Modal visibility control

  constructor(private analytics: AngularFireAnalytics) {}

  onRegisterClick() {
    this.analytics.logEvent('register_button_click', { component: 'EventComponent' });
    this.showModal = true; // Show the modal on button click
  }

  closeModal() {
    this.showModal = false; // Hide the modal when closing
  }
}
