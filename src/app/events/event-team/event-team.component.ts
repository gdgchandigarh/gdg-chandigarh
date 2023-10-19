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
    {
    id:1,
    image:"../../../assets/volunteers/Ayush Kumar.jpeg",
    name:"Ayush Kumar",
    college:"CGC Jhanjeri",
    designation:"Lead D4 Community",
    profile:"",
    twitter:"https://twitter.com/its_AKT_",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-432801206/",
    bio: "Frontend Developer at Gravity Infinity, B.Tech student and D4 Community Lead. Crafting engaging digital experiences through code. Passionate about web development and innovation. Committed to bridging technology and creativity. Excited to shape the future of tech."
  },
  {
    id:2,
    image:"../../../assets/volunteers/Parveen Jaiswal.jpeg",
    name:"Parveen Jaiswal",
    college:"SVIET",
    designation:"GDSC Lead",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/parveen-jaiswal/",
    bio: "Parveen Jaiswal, a tech enthusiast pursuing Computer Science & Engineering, specializes in full-stack web development using Mern Stack. An avid open-source contributor and video editor too.A Gdsc Lead and founder of gdsc sviet community."
  },
  {
    id:3,
    image:"../../../assets/volunteers/Abhishek Khanna.jpeg",
    name:"Abhishek Khanna",
    college:"Chandigarh University",
    designation:"GDSC Lead",
    profile:"",
    twitter:"https://twitter.com/iiTzAbhishek",
    linkedin: "https://www.linkedin.com/in/abhishek-khanna-7622751b5/",
    bio: "I’d describe myself as a passionate, dependable, imaginative explorer who is constantly looking to widen his creative horizons and bring a lot of enthusiasm to learn and perform to the table."
  },
  {
    id:4,
    image:"../../../assets/volunteers/Vrinda.jpeg",
    name:"Vrinda Vritti",
    college:"Chitkara University",
    designation:"GDSC Lead",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/vrinda-vritti-b3149021b/",
    bio: "Hey there! My name is Vrinda, and I am currently pursuing CSE with a specialization in AI at Chitkara University. I am deeply passionate about AI and machine learning, as demonstrated by my participation in several hackathons and reaching the grand finale of SIH. Additionally, my role as the Lead at GDSC, Chitkara University has allowed me to develop my leadership and communication skills while working with individuals from diverse backgrounds."
  },
  {
    id:5,
    image:"../../../assets/volunteers/Yashasvini.jpg",
    name:"Yashasvini",
    college:"GDSC CGC CEC",
    designation:"GDSC Lead",
    profile:"",
    twitter:"https://twitter.com/yashasvini121",
    linkedin: "https://www.linkedin.com/in/yashasvini121/",
    bio: "I am GDSC Lead at CGC CEC, Python Developer, AWS AI & ML Scholar."
  },
  {
    id:6,
    image:"../../../assets/volunteers/Kanishk Tyagi.jpg",
    name:"Kanishk Tyagi",
    college:"Parkyee",
    designation:"Full Stack Web Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/kanishk-tyagi-32970a173/",
    bio: "I am a Techie, Web series lover, a fitness freak, and have been spending my college days enjoying movies."
  },
  {
    id:7,
    image:"../../../assets/volunteers/Ronit Jai Prakash.jpg",
    name:"Ronit Jai Prakash",
    college:"Godigitify",
    designation:"Full Stack Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/ronit-jai-prakash-58082122a/ ",
    
    bio: "I have a passion for development and have worked and assisted on numerous websites and web apps and i also like to learn and explore various technologies in the field of development"
  },
  {
    id:8,
    image:"../../../assets/volunteers/Naveen.jpg",
    name:"Naveen Jaiswal",
    college:"SVIET",
    designation:"Full Stack Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/naveen-jaiswal/",
    
    bio: "Naveen Jaiswal, a passionate tech enthusiast and GDSC-SVIET Tech Lead, specializes in MERN Stack web development, open-source contributor with a deep passion for innovative development."
  },
  {
    id:9,
    image:"../../../assets/volunteers/Sagar.jpeg",
    name:"Sagar Malhotra",
    college:"MBITS Innovations",
    designation:"Android Developer",
    profile:"",
    twitter:"https://twitter.com/sagar0_o",
    linkedin: "https://www.linkedin.com/in/sagar0-0malhotra",
    
    bio: "Sagar Malhotra, your friendly neighborhood Android developer. He is the Lead organizer and Founding member of one of the most thriving students driven community of North East named D4 Community. From helping students, teaching, writing cool blogs to creating content for the world, Sagar is on his way to help folks ace their career in tech."
  },
  {
    id:10,
    image:"../../../assets/volunteers/Mantasha.jpeg",
    name:"Mantasha Tabassum",
    college:"SVIET",
    designation:"Event Lead",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/mantasha-tabassum-0322ab250/",
    
    bio: "Mantasha Tabassum, always brimming with energy and excitement, eager to explore new possibilities and take on challenges. She is currently working as a full stack developer and graphic designer. She is an Event and Branding lead of GDSC SVIET. She maintains a relaxed and balanced approach and finds peace and tranquility in nature."
  },
  {
    id:11,
    image:"../../../assets/volunteers/Priyanshi.jpg",
    name:"Priyanshi Sharma",
    college:"SVIET",
    designation:"Graphics Designer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/priyanshi-sharma-aa6391239",
    
    bio: "I am a passionate student, specializing in graphic design and MERN Stack development. With a creative flair and technical expertise, I strive to merge art and technology to create captivating digital experiences."
  },
  {
    id:12,
    image:"../../../assets/volunteers/Himanshu Verma.jpg",
    name:"Himanshu Verma",
    college:"Chitkara University",
    designation:"Video Editor",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/himanshu-verma-570465278/",
    
    bio: "Hello there! I'm Himanshu, and I'm a passionate video editor. With over an year of experience in the field, I've honed my skills to bring visuals to life and Bringing creativity and technical expertise to every frame via creating engaging stories through the power of video."
  },
  {
    id:13,
    image:"../../../assets/volunteers/Yashika.jpeg",
    name:"Yashika",
    college:"Chitkara University",
    designation:"Core Team Member GDSC CUIET",
    profile:"",
    twitter:"https://twitter.com/rainbowinordeal",
    linkedin: "https://www.linkedin.com/in/yashika-mukhija-37a48521b/",
    
    bio: "Yashika, a UX designer who loves to weave storytelling and creativity into exceptional digital experiences that are both visually appealing and user-friendly. She is a Core Team Member of GDSC CUIET. Beyond pixels and prototyping, she loves to do video editing and journaling."
  },
  {
    id:14,
    image:"../../../assets/volunteers/Gaurav.jpg",
    name:"Gaurav Kumar Biswas",
    college:"CGC Jhanjeri",
    designation:"Flutter Developer",
    profile:"",
    twitter:"https://twitter.com/GauravB50930591",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-biswas-37106a1b7/",
    
    bio: "Software Engineer in training with a passion for esports. I have experience in developing application using Flutter, Dart, Java as well as I am an experienced GFX / VFX artist basically work for Gaming Industries. I am also eager to learn new things and I am always looking for ways to improve my skills."
  },
  {
    id:15,
    image:"../../../assets/volunteers/Aman.jpg",
    name:"Aman Sharma",
    college:"Chitkara University ",
    designation:"MBA",
    profile:"",
    twitter:"https://twitter.com/AmanRarely?t=DcS9dNWxHXgTA3RO5sH-TA&s=08 ",
    linkedin: "https://www.linkedin.com/in/aman-sharma-7782501b6",
    
    bio: "Hello, I'm Aman Sharma, a passionate first-year MBA student with a keen interest in all things Google. I'm fascinated by the ever-evolving world of online marketing and am dedicated to unraveling the intricacies of digital promotion. In addition to my academic pursuits, I'm an enthusiastic content creator, using photography and engaging content to convey powerful messages to the world. Join me on this exciting journey as we explore the intersection of technology, marketing, and creative expression."
  },
  {
    id:16,
    image:"../../../assets/volunteers/Gurkirat Singh.png",
    name:"Gurkirat Singh",
    college:"LKC TC",
    designation:"Video Editor",
    profile:"",
    twitter:"https://twitter.com/GurkiratM1450?t=jh15cddd3hvBdHWIVwPYJg&s=08",
    linkedin: "https://www.linkedin.com/in/gurkirat-singh-b581b6251",
    
    bio: "I am a B.Tech (CSE) 2nd Year Student at LKCTC, Jalandhar. I want to be a successful developer in Machine Learning & Robotics in future. I am pretty good at camera operating & editing."
  },
  {
    id:17,
    image:"../../../assets/volunteers/Atul.jpeg",
    name:"Atul Raj",
    college:"CU",
    designation:"Student",
    profile:"",
    twitter:"https://x.com/Atulraj58333219?t=fo3WjB_rMSK_xU0oDA09Ow&s=09",
    linkedin: "https://www.linkedin.com/in/atul-raj-095322229",
    bio: "I'm a 3rd-year Computer Science student with a passion for web design and development. I bring a unique blend of technical expertise and business acumen to the table, along with a knack for event organization. With a keen interest in startups and entrepreneurship, I'm an IEEE member and a dedicated networker, ready to embark on a journey into product management."
  },
  {
    id:18,
    image:"../../../assets/volunteers/Adarsh.jpeg",
    name:"Adarsh Kumar Pandey",
    college:"Coding Bits",
    designation:"Student",
    profile:"",
    twitter:"https://twitter.com/adarshpandey191",
    linkedin: "https://www.linkedin.com/company/coding-bits/",
    bio: "I am Adarsh Kumar Pandey, the Founder and CEO-to-be of 'Coding Bits.' We are in the process of crafting a dynamic programming language learning platform."
  },
  {
    id:19,
    image:"../../../assets/volunteers/HarshitMahajan.png",
    name:"Harshit Mahajan",
    college:"Bluelearn",
    designation:"Community Manager",
    profile:"",
    twitter:"https://twitter.com/HarshitMahajan_",
    linkedin: "https://www.linkedin.com/in/hm1104/",
    bio: "An Artificial Intelligence and data sccience Student"
  },
];

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
  bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
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
  id:6,
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
  id:7,
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
  id:8,
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

onClick(eventType: string) {
  this.analytics.logEvent(eventType, {"component": "EventComponent"});
}
}
