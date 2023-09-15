import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
})
export class OrganizersComponent {
  organizers = [
      {
      id:1,
      image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/ayush_sharma_ffGmGN1.jpg",
      name:"Ayush Sharma",
      company:"IBM",
      designation:"Team Lead",
      profile:"",
      twitter:"",
    },
    {
      id:2,
      image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/harneet_singh_RKGm43z.jpg",
      name:"Harneet Singh",
      company:"KPMG",
      designation:"Developer",
      profile:"",
      twitter:"",
    },
    {
      id:3,
      image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/loveleen_kaur_suWZnDN.jpeg",
      name:"Loveleen Kaur",
      company:"Astrotalk",
      designation:"Software Engineer",
      profile:"",
      twitter:"",
    },
    {
      id:4,
      image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/kamal_vaid_Qdr8pjn.jpg",
      name:"Kamal Vaid",
      company:"Infosys Limited",
      designation:"Technology Lead",
      profile:"",
      twitter:"",
    },
    {
      id:5,
      image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/featured_attendees/MEK_8972%20%281%29.JPG",
      name:"Pranav Kumar",
      company:"Nagarro",
      designation:"Senior Engineer",
      profile:"",
      twitter:"",
    },
  ];

 modalRef: BsModalRef | null = null;
 selectedOrganizer: any; // Define selectedOrganizer

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, organizer: any) {
    this.selectedOrganizer = organizer;
    this.modalRef = this.modalService.show(template);
    this.modalRef?.setClass('modal-lg'); // Use optional chaining operator to access modalRef
  }
  
}
