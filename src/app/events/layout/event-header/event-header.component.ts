import { Component,HostListener } from '@angular/core';

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
      route: 'teams',
      itemName: 'Team',
    },
    {
      route:'sponsors',
      itemName:'Sponsors'
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
}
