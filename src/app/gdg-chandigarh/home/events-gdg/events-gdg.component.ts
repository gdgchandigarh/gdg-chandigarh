// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-events-gdg',
//   templateUrl: './events-gdg.component.html',
//   styleUrls: ['./events-gdg.component.css']
// })
// export class EventsGdgComponent {
//   pastEvents = [
    
//     {
//       id: 1,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2024-10-30-13-52-39_HEOeDMB.jpg",
//       date: "NOV 9, 2024",
//       type: " Speaker Session / Tech Talk",
//       name: "Empowering the Cloud Era",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 2,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Expert%20Talk_AsImhcp.jpg",
//       date: "OCT 26, 2024",
//       type: "External Ticketing",
//       name: "Generative AI : From Concept to Creation",
//       location: "YouTube",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 3,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DevFest%20Chandigarh.png",
//       date: "DEC 9, 2024",
//       type: "External Ticketing",
//       name: "DevFest Chandigarh 2022",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 4,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Expert%20Talk_AsImhcp.jpg",
//       date: "SEP 16, 2024",
//       type: "Speaker Session / Tech Talk",
//       name: "Introduction to Generative AI and Google PaLM",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 5,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/star%20keras%20flat_IEuAtQd.jpg",
//       date: "SEP 02, 2024",
//       type: "Speaker Session / Tech Talk",
//       name: "Keras Community Day",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 6,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Bevy%20Thumbnail_3yFLs9d.png",
//       date: "MAY 27, 2024",
//       type: "Speaker Session / Tech Talk",
//       name: "Google IO Extended",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 7,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/Event%20Thumbnail_uET8oRX.png",
//       date: "APRIL 15, 2024",
//       type: "Speaker Session / Tech Talk",
//       name: "International Women's Day 2024",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 8,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/IMG_20240131_161751_777.jpg",
//       date: "FEB 18, 2024",
//       type: "Speaker Session / Tech Talk",
//       name: "GDG Techshow",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 9,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/DF22-Bevy-EventThumb_KsdIeuk.png",
//       date: "DEC 17, 2022",
//       type: "External Ticketing",
//       name: "DevFest Chandigarh 2022",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 10,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/images_FqTeZVW.png",
//       date: "SEP 24, 2022",
//       type: "External Ticketing",
//       name: "Android Study Jams 2022",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     },
//     {
//       id: 11,
//       image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202022-05-24%20at%201.03.59%20PM.jpeg",
//       date: "JUN 5, 2022",
//       type: "External Ticketing",
//       name: "Google IO Extended Chandigarh 2022 ",
//       location: "Chandigarh",
//       org: "GDG Chandigarh",
//     }
//   ];

//   ngAfterViewInit() {
//     const slider = document.getElementById('auto-scroll-slider')!;
//     const slides = document.querySelectorAll('.event-slide');

//     slides.forEach((slide) => {
//       slide.addEventListener('mouseenter', () => {
//         slider.style.animationPlayState = 'paused'; // Pause the scrolling
//       });

//       slide.addEventListener('mouseleave', () => {
//         slider.style.animationPlayState = 'running'; // Resume scrolling
//       });
//     });
//   }
// }





// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Event {
//   cohost_registration_url: string;
//   cropped_picture_url: string;
//   start_date: string;
//   title: string;
//   event_type_title: string;
// }

// @Component({
//   selector: 'app-events-gdg',
//   templateUrl: './events-gdg.component.html',
//   styleUrls: ['./events-gdg.component.css']
// })
// export class EventsGdgComponent implements OnInit {

//   ngAfterViewInit() {
//     const slider = document.getElementById('auto-scroll-slider')!;
//     const slides = document.querySelectorAll('.event-slide');

//     slides.forEach((slide) => {
//       slide.addEventListener('mouseenter', () => {
//         slider.style.animationPlayState = 'paused'; // Pause the scrolling on hover
//       });

//       slide.addEventListener('mouseleave', () => {
//         slider.style.animationPlayState = 'running'; // Resume the scrolling when hover ends
//       });
//     });
//   }

//   pastEvents: Event[] = [];
//   apiUrl = 'https://gdg.community.dev/api/event_slim/for_chapter/287/?page_size=10&status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,cropped_banner_url,url,cohost_registration_url,description,description_short&page=1';
//   nextPageUrl: string | null = this.apiUrl;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchEvents();
//   }

//   fetchEvents() {
//     if (this.nextPageUrl) {
//       this.http.get<any>(this.nextPageUrl).subscribe((response) => {
//         const events = response.results.map((event: any) => ({
//           cohost_registration_url: event.cohost_registration_url,
//           cropped_picture_url: event.cropped_picture_url,
//           start_date: event.start_date,
//           title: event.title,
//           event_type_title: event.event_type_title,
//         }));
//         this.pastEvents = [...this.pastEvents, ...events];
//         this.nextPageUrl = response.links.next;
//       });
//     }
//   }
// }










import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Event {
  cohost_registration_url: string;
  cropped_picture_url: string;
  start_date: string;
  title: string;
  event_type_title: string;
}

@Component({
  selector: 'app-events-gdg',
  templateUrl: './events-gdg.component.html',
  styleUrls: ['./events-gdg.component.css']
})
export class EventsGdgComponent implements OnInit, AfterViewInit {
  pastEvents: Event[] = [];
  apiUrl = 'https://gdg.community.dev/api/event_slim/for_chapter/287/?page_size=20&status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,cropped_banner_url,url,cohost_registration_url,description,description_short&page=1';
  nextPageUrl: string | null = this.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEvents();
  }

  ngAfterViewInit() {
    // Wait for the DOM to be ready and events to load
    setTimeout(() => {
      const slider = document.getElementById('auto-scroll-slider');
      if (!slider) return;

      const slides = document.querySelectorAll('.event-slide');
      if (!slides.length) return;

      slides.forEach((slide) => {
        slide.addEventListener('mouseenter', () => {
          if (slider.style) {
            slider.style.animationPlayState = 'paused';
          }
        });

        slide.addEventListener('mouseleave', () => {
          if (slider.style) {
            slider.style.animationPlayState = 'running';
          }
        });
      });
    }, 1000); // Give time for events to load and DOM to update
  }

  fetchEvents() {
    if (this.nextPageUrl) {
      this.http.get<any>(this.nextPageUrl).subscribe({
        next: (response) => {
          const events = response.results.map((event: any) => ({
            cohost_registration_url: event.cohost_registration_url,
            cropped_picture_url: event.cropped_picture_url,
            start_date: event.start_date,
            title: event.title,
            event_type_title: event.event_type_title,
          }));
          this.pastEvents = [...this.pastEvents, ...events];
          this.nextPageUrl = response.links.next;
        },
        error: (error) => {
          console.error('Error fetching events:', error);
        }
      });
    }
  }
}