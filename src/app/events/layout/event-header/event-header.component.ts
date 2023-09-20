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
      route: 'speaker',
      itemName: 'Speakers'
    },
    {
      route: 'teams',
      itemName: 'Teams',
    },
    {
      route: 'agenda',
      itemName: 'Agenda'
    },
    {
      route: 'faq',
      itemName: 'FAQ',
    }
  ] 
    
  eventHeaderDescription = `DevFests are local conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest is
                            crafted by its local organizers to fit the needs and interests of its local developer community. Whether
                            it be through hands-on learning experiences, technical talks delivered in local languages by experts, or
                            by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on
                            Google's developer tools.`; 

  eventName = `DevFest 2023`;

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
