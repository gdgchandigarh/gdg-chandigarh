import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-keep-in-touch',
  templateUrl: './keep-in-touch.component.html',
  styleUrls: ['./keep-in-touch.component.css']
})
export class KeepInTouchComponent {
  imageUrl = '../../../assets/newImage2.png'
  constructor(private analytics: AngularFireAnalytics) {
    
  }
  onclick(resourceName: string) {
    this.analytics.logEvent(resourceName, {"component": "EventComponent"});
  }
}
