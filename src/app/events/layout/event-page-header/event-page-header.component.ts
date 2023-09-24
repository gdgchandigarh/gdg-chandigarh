import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page-header',
  templateUrl: './event-page-header.component.html',
  styleUrls: ['./event-page-header.component.css']
})
export class EventPageHeaderComponent implements OnInit {

  pathName = '';
 constructor(private route: ActivatedRoute){}

 ngOnInit() {
  this.route.url.subscribe(segments => {
    const lastSegment = segments[segments.length - 1];
    const lastName = lastSegment.path;
    this.pathName  = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  });
}
}
