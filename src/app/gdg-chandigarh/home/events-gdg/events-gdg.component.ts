import { Component } from '@angular/core';

@Component({
  selector: 'app-events-gdg',
  templateUrl: './events-gdg.component.html',
  styleUrls: ['./events-gdg.component.css']
})
export class EventsGdgComponent {
  pastEvents = [
    
    {
      id: 1,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2024-10-30-13-52-39_HEOeDMB.jpg",
      date: "NOV 9, 2024",
      type: " Speaker Session / Tech Talk",
      name: "Empowering the Cloud Era",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Expert%20Talk_AsImhcp.jpg",
      date: "OCT 26, 2024",
      type: "External Ticketing",
      name: "Generative AI : From Concept to Creation",
      location: "YouTube",
      org: "GDG Chandigarh",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DevFest%20Chandigarh.png",
      date: "DEC 9, 2023",
      type: "External Ticketing",
      name: "DevFest Chandigarh 2022",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Expert%20Talk_AsImhcp.jpg",
      date: "SEP 16, 2023",
      type: "Speaker Session / Tech Talk",
      name: "Introduction to Generative AI and Google PaLM",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
      date: "SEP 02, 2023",
      type: "Speaker Session / Tech Talk",
      name: "Keras Community Day",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Bevy%20Thumbnail_3yFLs9d.png",
      date: "MAY 27, 2023",
      type: "Speaker Session / Tech Talk",
      name: "Google IO Extended",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Event%20Thumbnail_uET8oRX.png",
      date: "APRIL 15, 2023",
      type: "Speaker Session / Tech Talk",
      name: "International Women's Day 2023",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/IMG_20230131_161751_777.jpg",
      date: "FEB 18, 2023",
      type: "Speaker Session / Tech Talk",
      name: "GDG Techshow",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/DF22-Bevy-EventThumb_KsdIeuk.png",
      date: "DEC 17, 2022",
      type: "External Ticketing",
      name: "DevFest Chandigarh 2022",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/images_FqTeZVW.png",
      date: "SEP 24, 2022",
      type: "External Ticketing",
      name: "Android Study Jams 2022",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202022-05-24%20at%201.03.59%20PM.jpeg",
      date: "JUN 5, 2022",
      type: "External Ticketing",
      name: "Google IO Extended Chandigarh 2022 ",
      location: "Chandigarh",
      org: "GDG Chandigarh",
    }
  ];

  ngAfterViewInit() {
    const slider = document.getElementById('auto-scroll-slider')!;
    const slides = document.querySelectorAll('.event-slide');

    slides.forEach((slide) => {
      slide.addEventListener('mouseenter', () => {
        slider.style.animationPlayState = 'paused'; // Pause the scrolling
      });

      slide.addEventListener('mouseleave', () => {
        slider.style.animationPlayState = 'running'; // Resume scrolling
      });
    });
  }
}
