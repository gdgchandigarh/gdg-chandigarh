// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-find-event',
//   templateUrl: './find-event.component.html',
//   styleUrls: ['./find-event.component.css']
// })
// export class FindEventComponent {

// }



import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-find-event',
  templateUrl: './find-event.component.html',
  styleUrls: ['./find-event.component.css']
})
export class FindEventComponent implements OnInit, OnDestroy {
  images = [
    'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05543.JPG',
    'assets/shared.jpg', 
  ];
  currentImageIndex = 0;
  imageUrl = this.images[this.currentImageIndex];
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.imageUrl = this.images[this.currentImageIndex];
    }, 3000); // Change image every 2 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
