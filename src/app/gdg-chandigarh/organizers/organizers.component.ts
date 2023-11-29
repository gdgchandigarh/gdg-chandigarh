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
      id: 1,
      image:"../../../assets/organizers/Kamal Vaid.png",
      name:"Kamal Vaid",
      company:"Infosys",
      designation:"Technology Lead",
      profile:"",
      twitter:"https://twitter.com/cammykamal",
      linkedin: "https://www.linkedin.com/in/kamal-vaid/",
      
      bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
    },
    {
      id:2,
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
      id:3,
      image:"../../../assets/organizers/loveleen.webp",
      name:"Loveleen Kaur",
      company:"Astrotalk",
      designation:"Senior Engineer",
      profile:"",
      twitter:"https://twitter.com/loveleen_nancy",
      linkedin: "https://www.linkedin.com/in/loveleen-kaur/",
      
      bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
    },
    {
      id:4,
      image:"../../../assets/organizers/Pranav.png",
      name:"Pranav Kumar Verma",
      company:"Nagarro",
      designation:"Software Engineer",
      profile:"",
      linkedin:"https://www.linkedin.com/in/pranav-kumar-verma/",
      twitter: "https://twitter.com/prnvkmr954",
      bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
    },
    {
      id:5,
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
      id:6,
      image:"../../../assets/organizers/ayush.webp",
      name:"Ayush Sharma",
      company:"IBM",
      designation:"Application Developer",
      profile:"",
      twitter:"https://twitter.com/I_ayush_sharma",
      linkedin: "https://www.linkedin.com/in/sharmaayush981/",
      
      bio: "Ayush is an Application Developer in IBM. He is Co Lead - Meta Developer Circle (Chandigarh). He is Certified Java & Cloud full stack Developer. He is Core Team Lead (Google Developers Group-Chandigarh)."
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
