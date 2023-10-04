import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-gdg-chandigarh',
  templateUrl: './gdg-chandigarh.component.html',
  styleUrls: ['./gdg-chandigarh.component.css']
})
export class GdgChandigarhComponent  implements OnInit {
  constructor(private analytics: AngularFireAnalytics) {
    
  }
  ngOnInit(): void {
    this.analytics.logEvent('gdg_home_open', {"component": "GDG Chandigarh Component"});
  }
}
