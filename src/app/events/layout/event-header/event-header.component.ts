import { Component,HostListener } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css']
})
export class EventHeaderComponent {
  boxShadowStyle: any = {}; // 
  navMenu = [
    {
      route: 'agenda',
      itemName: 'Agenda'
    },
    {
      route: 'speaker',
      itemName: 'Speakers'
    },
    {
      route: 'team',
      itemName: 'Team',
    },
    {
      route:'partners',
      itemName:'Partners'
    },
    {
      route: 'faq',
      itemName: 'FAQ',
    }
    
  ] 
    
  eventHeaderDescription = `Google Developer Groups Chandigarh is going to host the annual flagship event DevFest Chandigarh (India). 
                            It is an all day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc.`; 

  eventName = `DevFest`;
  eventYear = `2023`;
  eventPlace = `Chandigarh`;

  eventheaderBottom = ` DevFest opens for registration on October 2, 2023. Check back for updates!`;

  constructor(private analytics: AngularFireAnalytics) {
  }

  onRegisterClick() {
    this.analytics.logEvent('register_button_click_mobile', {"component": "EventComponent"});
  }

  onScroll(event: any) {
    const scrollY = event.target.scrollTop;

    if (scrollY > 0) {
      this.boxShadowStyle = {
        'box-shadow': '5px 5px 5px rgba(0, 0, 0, 0.88)'
      };
    } else {
      this.boxShadowStyle = {};
    }
  }

  onClick(eventName: string) {
    if(eventName === 'Agenda') {
      this.analytics.logEvent('event_nav_agenda_click', {"component": "EventComponent"});
    } else if(eventName === 'Speakers') {
      this.analytics.logEvent('event_nav_speakers_click', {"component": "EventComponent"});
    } else if(eventName === 'Team') {
      this.analytics.logEvent('event_nav_team_click', {"component": "EventComponent"});
    } else if(eventName === 'Sponsors') {
      this.analytics.logEvent('event_nav_sponsors_click', {"component": "EventComponent"});
    } else if(eventName === 'FAQ') {
      this.analytics.logEvent('event_nav_faq_click', {"component": "EventComponent"});
    } else {
      this.analytics.logEvent('event_nav_home_click', {"component": "EventComponent"});
    }
  }
}
