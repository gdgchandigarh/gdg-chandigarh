import { Component } from '@angular/core';

@Component({
  selector: 'app-event-agenda',
  templateUrl: './event-agenda.component.html',
  styleUrls: ['./event-agenda.component.css']
})
export class EventAgendaComponent {
  agenda = [
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    },
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    },
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    },
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    },
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    },
    {
      startTime: '',
      endTime: '',
      eventTitle: '',
      eventSpeaker: ''
    }
  ]
}
