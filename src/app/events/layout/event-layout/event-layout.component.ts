import { Component } from '@angular/core';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.css']
})
export class EventLayoutComponent {
   isLoading: boolean = true;

  ngOnInit(): void {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Adjust the delay as needed
  }

}
