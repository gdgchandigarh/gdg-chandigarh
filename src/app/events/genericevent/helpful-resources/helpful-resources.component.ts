import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-helpful-resources',
  templateUrl: './helpful-resources.component.html',
  styleUrls: ['./helpful-resources.component.css']
})
export class HelpfulResourcesComponent {
  constructor(private analytics: AngularFireAnalytics) {
    
  }
  onclick(resourceName: string) {
    this.analytics.logEvent(resourceName, {"component": "EventComponent"});
  }
}
