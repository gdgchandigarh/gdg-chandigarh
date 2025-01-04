import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  
  constructor(private titleService: Title,  private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Extract the title from the route data or any other logic you prefer
        this.title = this.getTitleFromRoute(event.urlAfterRedirects);
        
        // Set the new title
        this.titleService.setTitle(this.title);
      }
    });
  }

  private getTitleFromRoute(url: string): string {
    if(url.includes('events/devfest/home')){
      return 'DevFest Chandigarh 2024';
    }
    if (url.includes('/events/devfest/agenda')) {
      return 'Agenda | DevFest Chandigarh 2024';
    } else if (url.includes('/events/devfest/speaker')) {
      return 'Speaker | DevFest Chandigarh 2024';
    } else if (url.includes('/events/devfest/team')) {
      return 'Team | DevFest Chandigarh 2024';
    } else if (url.includes('/events/devfest/sponsors')) {
      return 'Sponsors | DevFest Chandigarh 2024';
    } else if (url.includes('/events/devfest/faq')) {
      return 'FAQ | DevFest Chandigarh 2024';
    } else if(url.includes('events/devfest/coming-soon')) {
      return 'Coming-Soon | DevFest Chandigarh 2024';
    }
      else {
      return 'GDG Chandigarh'; // Default title
    }
  }
  
  
}


