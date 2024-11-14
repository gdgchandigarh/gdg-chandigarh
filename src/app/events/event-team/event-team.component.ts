import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-event-team',
  templateUrl: './event-team.component.html',
  styleUrls: ['./event-team.component.css']
})
export class EventTeamComponent {
  constructor(private analytics: AngularFireAnalytics) {
    
  }
volunteers = [
  // {
  //   id:1,
  //   image:"../../../assets/volunteers/Ayush Kumar.jpeg",
  //   name:"Ayush Kumar",
  //   college:"CGC Jhanjeri",
  //   designation:"Lead D4 Community",
  //   profile:"",
  //   twitter:"https://twitter.com/its_AKT_",
  //   linkedin: "https://www.linkedin.com/in/ayush-kumar-432801206/",
  //   bio: "Frontend Developer at Gravity Infinity, B.Tech student and D4 Community Lead. Crafting engaging digital experiences through code. Passionate about web development and innovation. Committed to bridging technology and creativity. Excited to shape the future of tech."
  // },
  {
    id:1,
    image:"../../../assets/volunteers/Zaid.jpg",
    name:"Zaid",
    college:"CGC Jhanjeri",
    designation:"Designing Lead",
    profile:"",
    twitter:"https://x.com/Qazi__Zaid?t=RI2iBmu0ZJCbmI4vc_zcyQ&s=09",
    linkedin: "https://www.linkedin.com/in/qazi-zaid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bio: "Zaid is a creative tech enthusiast pursuing Computer Science & Engineering, Specialized in UI/UX designing, Graphic Designing and Web Development. He's the Graphic Designing Lead at D4 Community, with a focus on community impact through design and innovation."
  },
];

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
  bio: "Yatin is a Project Engineer by profession having 4+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
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
  
  bio: "By profession I'm working as Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere."
},
{
  id:3,
  image:"../../../assets/organizers/Cherish.jpeg",
  name:"Cherish Santoshi",
  company:"DevNetwork",
  designation:"Advisory Board Member",
  profile:"",
  twitter:"https://twitter.com/CherishSantoshi",
  linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
  bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
},
{
  id:4,
  image:"../../../assets/organizers/Aashi.jpeg",
  name:"Aashi",
  company:"MedEnGauge Healthcare Pvt Ltd",
  designation:"Co-Founder",
  profile:"",
  twitter:"https://twitter.com/AashiDutt",
  linkedin: "https://www.linkedin.com/in/aashi-dutt",
  
  bio: "Aashi is the lead organizer for TensorFlow UserGroup Chandigarh and a 2X Kaggle expert. She is a ML enthusiast who loves to work on real world problems."
},
{
  id:5,
  image:"../../../assets/organizers/ayush.webp",
  name:"Ayush Kumar Tiwari",
  company:"NIWIAI Private Limited",
  designation:"Software Engineer",
  profile:"",
  twitter:"https://twitter.com/its_AKT_",
  linkedin: "https://www.linkedin.com/in/itsayu/",

  bio: "Ayush is a Software Engineer at NIWIAI. He loves learning new technologies and applying them in his work. He also enjoys helping others by sharing knowledge and experiences in the tech field"
  
 }
];

onClick(eventType: string) {
  this.analytics.logEvent(eventType, {"component": "EventComponent"});
}
}
