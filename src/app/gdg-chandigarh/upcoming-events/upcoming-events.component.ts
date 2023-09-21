import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-upcoming-events',
templateUrl: './upcoming-events.component.html',
    styleUrls: ['./upcoming-events.component.css']
})

export class UpcomingEventsComponent {
  userAvatarUrl: string = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-08-26%2520at%25202.32.23%2520AM.jpeg";
  imageUrl = 'assets/img.png';
  avatarUrl = 'assets/OIP.jpeg'
  closeResult: string | null = null;

  UpcommingEvent = [
    {
      id: 1,
      image: 'assets/devfest.png',
      date: "Dec 09, 2023",
      type: "Devfest 2023",
      name: "DevFest Chandigarh",
      desc: " Introduction to Generative AI and Google PaLM This event will introduce you to the basics of generative AI, a rapidly growing field of artificial intelligence that is capable of generating text, images, or other media.We will discuss the different types of generative AI models, and how they can be used to create new and innovative products and services.",
      location: "Chandigarh",
      org: "GDG Chandigarh",
      route: '/events',
      isActive: true
  }
  

];

  constructor(private router: Router) {}


  openScrollableContent() {
    this.router.navigate(['/events']);
  }

}
