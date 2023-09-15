import { Component } from '@angular/core';
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
        image: 'assets/img.png',
        date: "SEP 02, 2023",
        type: "Tech-Talk/ Speaker Session",
        name: "Introduction to Generative AI and Google PaLM",
        desc: " Introduction to Generative AI and Google PaLM This event will introduce you to the basics of generative AI, a rapidly growing field of artificial intelligence that is capable of generating text, images, or other media.We will discuss the different types of generative AI models, and how they can be used to create new and innovative products and services.",
        location: "Chandigarh",
        org: "GDG Chandigarh",
        isActive: true
    },
    {
        id: 2,
        image: 'assets/img.png',
        date: "SEP 02, 2023",
        type: "Devfest 2023",
        name: "Keras Community Day",
        desc: " Introduction to Generative AI and Google PaLM This event will introduce you to the basics of generative AI, a rapidly growing field of artificial intelligence that is capable of generating text, images, or other media.We will discuss the different types of generative AI models, and how they can be used to create new and innovative products and services.",
        location: "Chandigarh",
        org: "GDG Chandigarh",
        route: '/events',
        isActive: true
    },

];

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openFullscreen(content: any) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content,  { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, {size : 'lg', scrollable: true });
  }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }
}
