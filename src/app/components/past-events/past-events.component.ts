import { Component } from '@angular/core';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent {
   pastEvents = [
    {
      id: 1,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
      date: "SEP 02, 2023",
      type: "Tech-Talk/ Speaker Session",
      name: "Keras Community Day",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
      date: "SEP 02, 2023",
      type: "Tech-Talk/ Speaker Session",
      name: "Keras Community Day",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
      date: "SEP 02, 2023",
      type: "Tech-Talk/ Speaker Session",
      name: "Keras Community Day",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
      date: "SEP 02, 2023",
      type: "Tech-Talk/ Speaker Session",
      name: "Keras Community Day",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
  ];
}
