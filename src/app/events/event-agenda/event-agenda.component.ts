import { Component } from '@angular/core';

@Component({
  selector: 'app-event-agenda',
  templateUrl: './event-agenda.component.html',
  styleUrls: ['./event-agenda.component.css']
})
export class EventAgendaComponent {
  agenda = [
    {
      startTime: '8:30 AM',
      endTime: '10:00 AM',
      eventTitle: 'Registrations',
      eventSpeaker: ''
    },
    {
      startTime: '10:00 AM',
      endTime: '10:30 AM',
      eventTitle: 'Welcome Keynote',
      eventSpeaker: 'Abirami Sukumaran'
    },
    {
      startTime: '10:30 AM',
      endTime: '11:15 AM',
      eventTitle: 'Reimagine What is possible with Generative AI Studio ',
      eventSpeaker: 'Anubhav Singh'
    },
    {
      startTime: '11:15 AM',
      endTime: '12:00 PM',
      eventTitle: 'Hands-on: Data to AI with Google Cloud',
      eventSpeaker: 'Abirami Sukumaran'
    },
    {
      startTime: '12:00 PM',
      endTime: '12:15 PM',
      eventTitle: 'Ice Breaker Activity',
      eventSpeaker: ''
    },
    {
      startTime: '12:15 PM',
      endTime: '12:45 PM',
      eventTitle: 'Community / WTM / #IamRemarkable',
      eventSpeaker: ''
    },
    {
      startTime: '12:45 PM',
      endTime: '1:00 PM',
      eventTitle: 'Sponsor Session',
      eventSpeaker: ''
    },
    {
      startTime: '1:00 PM',
      endTime: '2:00 PM',
      eventTitle: 'Lunch',
      eventSpeaker: ''
    },
    {
      startTime: '2:00 PM',
      endTime: '2:45 PM',
      eventTitle: 'Android App Design and Optimization',
      eventSpeaker: 'Kamal Vaid & Loveleen Kaur'
    },
    {
      startTime: '2:00 PM',
      endTime: '2:45 PM',
      eventTitle: 'Web Session',
      eventSpeaker: 'Demo Speaker'
    },
    {
      startTime: '2:45 PM',
      endTime: '3:30 PM',
      eventTitle: 'Harmonizing Widget Creation with SOLID Principles in Flutter',
      eventSpeaker: 'Debasmita Sarkar'
    },
    {
      startTime: '2:45 PM',
      endTime: '3:30 PM',
      eventTitle: 'Supercharge Your Android Apps with Firebase',
      eventSpeaker: 'Pankaj Rai'
    },
    {
      startTime: '3:30 PM',
      endTime: '4:15 PM',
      eventTitle: 'Panel Discussion',
      eventSpeaker: ''
    },
    {
      startTime: '4:15 PM',
      endTime: '5:00 PM',
      eventTitle: 'Closing and Networking',
      eventSpeaker: ''
    },
  ]

  constructor() {
    console.log(this.agenda);
  }
}
