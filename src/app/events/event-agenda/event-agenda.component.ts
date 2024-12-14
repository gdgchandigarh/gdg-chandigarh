import { Component } from '@angular/core';

@Component({
  selector: 'app-event-agenda',
  templateUrl: './event-agenda.component.html',
  styleUrls: ['./event-agenda.component.css']
})
export class EventAgendaComponent {
  agenda = [
    {
      startTime: '8:00 AM',
      endTime: '10:00 AM',
      eventTitle: 'Registrations',
      eventSpeaker: ''
    },
    {
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      eventTitle: 'Welcome Keynote',
      eventSpeaker: ''
    },
    {
      startTime: '10:15 AM',
      endTime: '10:45 AM',
      eventTitle: 'Building Multimodal Search with Gemini Vision model and RAG',
      eventSpeaker: 'Rishiraj Acharya'
    },
    {
      startTime: '10:45 AM',
      endTime: '11:30 AM',
      eventTitle: 'Google Cloud FinOps Best Practices for Generative Al',
      eventSpeaker: 'Jitendera Gupta'
    },
    {
      startTime: '11:30 AM',
      endTime: '12:15 PM',
      eventTitle: 'Unlock AI anywhere with Google Distributed Cloud',
      eventSpeaker: 'Mohit Gulati'
    },
    {
      startTime: '12:15 PM',
      endTime: '12:30 PM',
      eventTitle: 'Ice Breaker Activity (Quiz)',
      eventSpeaker: ''
    },
    {
      startTime: '12:30 PM',
      endTime: '1:00 PM',
      eventTitle: 'Startup Basics: Turning Ideas into Reality',
      eventSpeaker: 'Dhaval Kaku'
    },
    {
      startTime: '1:00 PM',
      endTime: '2:00 PM',
      eventTitle: 'Lunch and Networking',
      eventSpeaker: ''
    },
    {
      startTime: '2:00 PM',
      endTime: '2:45 PM',
      eventTitle: 'Getting Started with AR.js: Creating AR Experiences on the Web (Web Track)',
      eventSpeaker: 'Chhavi Garg'
    },
    {
      startTime: '2:00 PM',
      endTime: '2:45 PM',
      eventTitle: 'A Startup Guide to Ship Mobile App Faster Using Flutter (Mobile Track)',
      eventSpeaker: 'Burhanuddin Rashid'
    },
    {
      startTime: '2:45 PM',
      endTime: '3:30 PM',
      eventTitle: 'Angular Libraries: From Code to Collaboration (Web Track)',
      eventSpeaker: 'Rohtash Sethi'
    },
    {
      startTime: '2:45 PM',
      endTime: '3:30 PM',
      eventTitle: 'Passkeys and identity best practices (Mobile Track)',
      eventSpeaker: 'Pranav Singh Parmar'
    },
    {
      startTime: '3:30 PM',
      endTime: '4:00 PM',
      eventTitle: 'Panel Discussion',
      eventSpeaker: ''
    },
    {
      startTime: '4:00 PM',
      endTime: '4:30 PM',
      eventTitle: 'Closing Note and Swags Distribution',
      eventSpeaker: ''
    },
  ]

  constructor() {
  }
}
