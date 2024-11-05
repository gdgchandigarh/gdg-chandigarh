import { AfterViewInit, Component, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
})
export class OrganizersComponent implements AfterViewInit {
  organizers = [
    {
      id:1,
      image:"../../../assets/organizers/yatin.webp",
      name:"Yatin Nayyar",
      company:"Wipro",
      designation:"Project Engineer",
      profile:"",
      twitter:"https://twitter.com/hifiveyatin",
      linkedin: "https://www.linkedin.com/in/hifiveyatin/",
      
      bio: "Yatin is a Project Engineer by profession having 2+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
    },
    {
      id:2,
      image:"../../../assets/organizers/harneet.webp",
      name:"Harneet Singh",
      company:"KPMG",
      designation:"Associate Consultant",
      profile:"",
      twitter:"https://twitter.com/iharneetsingh",
      linkedin: "https://www.linkedin.com/in/iharneetsingh/",
      
      bio: "By profession I'm working as Associate Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere."
    },
    {
      id:3,
      image:"../../../assets/organizers/ayush.webp",
      name:"Ayush Kumar Tiwari",
      company:"NIWIAI Private Limited",
      designation:"Software Engineer",
      profile:"",
      twitter:"https://twitter.com/its_AKT_",
      linkedin: "https://www.linkedin.com/in/itsayu/",
      Portfolio: "https://itsayu.vercel.app/",
      
      bio: "Ayush is a Software Engineer at NIWIAI. He loves learning new technologies and applying them in his work. He also enjoys helping others by sharing knowledge and experiences in the tech field"
    }
    ];

 modalRef: BsModalRef | null = null;
 selectedOrganizer: any; // Define selectedOrganizer

  constructor(private modalService: BsModalService, private el: ElementRef) {}

  openModal(template: TemplateRef<any>, organizer: any) {
    this.selectedOrganizer = organizer;
    this.modalRef = this.modalService.show(template);
    this.modalRef?.setClass('modal-lg'); // Use optional chaining operator to access modalRef
  }

  ngAfterViewInit(): void {
    this.scrollToSection('organizers');
  }

  scrollToSection(sectionId: string): void {
    const targetElement = this.el.nativeElement.querySelector('#' + sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  
}
