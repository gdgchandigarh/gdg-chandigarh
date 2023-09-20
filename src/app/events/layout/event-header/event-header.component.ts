import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css']
})
export class EventHeaderComponent {
  boxShadowStyle: any = {}; // 
  

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
