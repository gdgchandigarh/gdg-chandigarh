import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { IPerson } from 'src/app/models/IPerson.model';

@Component({
  selector: 'app-event-team',
  templateUrl: './event-team.component.html',
  styleUrls: ['./event-team.component.css'],
})
export class EventTeamComponent {
  constructor(private analytics: AngularFireAnalytics) {}

  volunteers = [
    {
      id: 1,
      image: '../../../assets/volunteers/Zaid.jpg',
      name: 'Zaid',
      college: 'CGC Jhanjeri',
      designation: 'Designing Lead',
      profile: '',
      twitter: 'https://x.com/Qazi__Zaid?t=RI2iBmu0ZJCbmI4vc_zcyQ&s=09',
      linkedin:
        'https://www.linkedin.com/in/qazi-zaid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      bio: "Zaid is a creative tech enthusiast pursuing Computer Science & Engineering, Specialized in UI/UX designing, Graphic Designing and Web Development. He's the Graphic Designing Lead at D4 Community, with a focus on community impact through design and innovation.",
    },
    {
      id: 2,
      image: '../../../assets/volunteers/Riya.png',
      name: 'Riya Singh',
      college: 'Chandiagrh University',
      designation: 'Asst. Co-Organizer',
      profile: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/riyasinghs/',
      bio: 'The Asst Co-Organizer of Google Developers Group Cloud Chandigarh. A professional web developer. Currently interning in Machine Learning @NCUE in Taiwan. Passionate about coding and creating a world of her own vision.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/featured_attendees/WhatsApp%20Image%202023-01-11%20at%2013.07.47_ahpuwWw.jpg',
      name: 'Sai Kumar Swarnpudi',
      college: 'Chandiagrh University',
      designation: 'Team Lead',
      profile: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/saikumarswarnapudi/',

      bio: 'The team lead of Google Developers Group Cloud Chandigarh. Providing stability and playing a pivotal role by handling the crew for the community.',
    },
    {
      id: 4,
      image: '../../../assets/volunteers/harsh.jpg',
      name: 'Harsh Khatri',
      college: 'CGC Jhanjeri',
      designation: 'Graphics Designer, D4 Community',
      profile: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/harsh-khatri-b52a07278/',

      bio: 'Harsh Khatri tech enthusiast pursuing Computer Science & Engineering. Specialized in Web development and video editor',
    },
    {
      id: 5,
      // image:"https://media.licdn.com/dms/image/v2/D5603AQFP_TelJCeOGw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722012669211?e=1738195200&v=beta&t=LRWIZ-_bJlRRkpgJ0SnGpM9bKQ5OONR0YTNjmT8xtbc",
      image: '../../../assets/volunteers/Yashika.jpg',
      name: 'Yashika Mukhija',
      college: 'QuadB Technologies',
      designation: 'UX UI Designer',
      profile: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/yashika-mukhija/',

      bio: 'Yashika is a UX UI Designer who designs Web3 applications by profession. She loves solving design challenges and making digital experiences better for everyone. In her spare time, she enjoys immersing herself in different cultures and expressing her thoughts through digital storytelling.',
    },
    {
      id: 6,
      image: '../../../assets/volunteers/devansha.jpg',
      name: 'Devansh Srivastava',
      college: 'CGC Jhanjeri',
      designation: 'Management Lead, D4 Community',
      profile: '',
      twitter: '',
      linkedin:
        'https://www.linkedin.com/in/devansh-srivastava-95a343204/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

      bio: 'Devansh is a passionate and self-motivated individual currently in the final year of graduation, with a strong foundation in Python and experience working with NoSQL databases. Currently serving as the Management Lead at D4 Community, showcasing strong managerial skills and driving initiatives focused on community growth and collaboration.',
    },
    {
      id: 7,
      image: '../../../assets/volunteers/Devishi.jpg',
      name: 'Devishi Aggarwal',
      college: 'Chandigarh University',
      designation: 'Campus Lead CU, D4 Community',
      profile: '',
      twitter: '',
      linkedin: 'http://linkedin.com/in/devishiaggarwal',

      bio: 'Devishi Aggarwal, student at Chandigarh University, is a dynamic leader known for organizing impactful tech events and collaborating with global speakers. With expertise in pre-event planning, UI/UX design, and IoT projects, she has led over 10 successful initiatives. A mentor and host, Devishi inspires peers through workshops and community-building efforts.',
    },
    {
      id: 8,
      image: '../../../assets/volunteers/ashish.jpeg',
      name: 'Ashish kumar Singh',
      college: 'Chandigarh University',
      designation: 'Video editor and cameraman ',
      profile: '',
      // twitter:"https://twitter.com/its_AKT_",
      linkedin: 'http://linkedin.com/in/devishiaggarwal',

      bio: 'Ashish Kumar Singh is a student at Chandigarh University, pursuing computer science and engineering, his passion for storytelling through video editing. As a dedicated video editor, he contributes his skills to the D4 Community, enhancing their visual content with creativity and precision.',
    },
  ];

  organizers = [
    {
      id: 1,
      image: '../../../assets/organizers/yatin.webp',
      name: 'Yatin Nayyar',
      company: 'Wipro',
      designation: 'Project Engineer',
      profile: '',
      twitter: 'https://twitter.com/hifiveyatin',
      linkedin: 'https://www.linkedin.com/in/hifiveyatin/',
      bio: 'Yatin is a Project Engineer by profession having 4+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers.',
    },
    {
      id: 2,
      image: '../../../assets/organizers/harneet.webp',
      name: 'Harneet Singh',
      company: 'KPMG',
      designation: 'Associate Consultant',
      profile: '',
      twitter: 'https://twitter.com/iharneetsingh',
      linkedin: 'https://www.linkedin.com/in/iharneetsingh/',

      bio: "By profession I'm working as Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere.",
    },
    {
      id: 3,
      image: '../../../assets/organizers/Cherish.jpeg',
      name: 'Cherish Santoshi',
      company: 'DevNetwork',
      designation: 'Advisory Board Member',
      profile: '',
      twitter: 'https://twitter.com/CherishSantoshi',
      linkedin: 'https://www.linkedin.com/in/cherishsantoshi/',
      bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education.",
    },
    {
      id: 4,
      image: '../../../assets/organizers/Aashi.jpeg',
      name: 'Aashi',
      company: 'MedEnGauge Healthcare Pvt Ltd',
      designation: 'Co-Founder',
      profile: '',
      twitter: 'https://twitter.com/AashiDutt',
      linkedin: 'https://www.linkedin.com/in/aashi-dutt',

      bio: 'Aashi is the lead organizer for TensorFlow UserGroup Chandigarh and a 2X Kaggle expert. She is a ML enthusiast who loves to work on real world problems.',
    },
    {
      id: 5,
      image: '../../../assets/organizers/ayush.webp',
      name: 'Ayush Kumar Tiwari',
      company: 'NIWIAI Private Limited',
      designation: 'Software Engineer',
      profile: '',
      twitter: 'https://twitter.com/its_AKT_',
      linkedin: 'https://www.linkedin.com/in/itsayu/',

      bio: 'Ayush is a Software Engineer at NIWIAI. He loves learning new technologies and applying them in his work. He also enjoys helping others by sharing knowledge and experiences in the tech field',
    },
  ];

  onClick(eventType: string) {
    this.analytics.logEvent(eventType, { component: 'EventComponent' });
  }
}
