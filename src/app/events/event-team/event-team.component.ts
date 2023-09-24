import { Component } from '@angular/core';

@Component({
  selector: 'app-event-team',
  templateUrl: './event-team.component.html',
  styleUrls: ['./event-team.component.css']
})
export class EventTeamComponent {
volunteers = [
    {
    id:1,
    image:"../../../assets/volunteers/Ayush Kumar.jpeg",
    name:"Ayush Kumar",
    college:"CGC Jhanjeri",
    designation:"Frontend Developer",
    profile:"",
    twitter:"https://twitter.com/its_AKT_",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-432801206/",
    instagram: "",
    bio: "Frontend Developer at Gravity Infinity, B.Tech student and D4 Community Lead. Crafting engaging digital experiences through code. Passionate about web development and innovation. Committed to bridging technology and creativity. Excited to shape the future of tech."
  },
  {
    id:2,
    image:"../../../assets/volunteers/Parveen Jaiswal.jpeg",
    name:"Parveen Jaiswal",
    college:"SVIET",
    designation:"Frontend Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/parveen-jaiswal/",
    instagram: "",
    bio: "Parveen Jaiswal, a tech enthusiast pursuing Computer Science & Engineering, specializes in full-stack web development using Mern Stack. An avid open-source contributor and video editor too.A Gdsc Lead and founder of gdsc sviet community."
  },
  {
    id:3,
    image:"../../../assets/volunteers/Abhishek Khanna.jpeg",
    name:"Abhishek Khanna",
    college:"Chandigarh University",
    designation:"GDSC Lead",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/abhishek-khanna-7622751b5/",
    instagram: "",
    bio: "A young enthusiast, passionate learner ready to take on the software engineering world!"
  },
  {
    id:4,
    image:"../../../assets/volunteers/Kanishk Tyagi.jpg",
    name:"Kanishk Tyagi",
    college:"Parkyee",
    designation:"Full Stack Web Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/kanishk-tyagi-32970a173/",
    instagram: "",
    bio: "I am a Techie, Web series lover, a fitness freak, and have been spending my college days enjoying movies."
  },
  {
    id:5,
    image:"../../../assets/volunteers/Ronit Jai Prakash.jpg",
    name:"Ronit Jai Prakash",
    college:"Godigitify",
    designation:"Full Stack Developer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/ronit-jai-prakash-58082122a/ ",
    instagram: "",
    bio: "I have a passion for development and have worked and assisted on numerous websites and web apps and i also like to learn and explore various technologies in the field of development"
  },
  {
    id:6,
    image:"../../../assets/volunteers/Naveen.jpg",
    name:"Naveen Jaiswal",
    college:"SVIET",
    designation:"Full Stack Developer",
    profile:"",
    twitter:"",
    linkedin: "www.linkedin.com/in/naveen-jaiswal/",
    instagram: "",
    bio: "Naveen Jaiswal, a passionate tech enthusiast and GDSC-SVIET Tech Lead, specializes in MERN Stack web development, open-source contributor with a deep passion for innovative development."
  },
  {
    id:7,
    image:"../../../assets/volunteers/Sagar.jpeg",
    name:"Sagar Malhotra",
    college:"MBITS Innovations",
    designation:"Android Developer",
    profile:"",
    twitter:"https://twitter.com/sagar0_o",
    linkedin: "https://www.linkedin.com/in/sagar0-0malhotra",
    instagram: "",
    bio: "Sagar Malhotra, your friendly neighborhood Android developer. He is the Lead organizer and Founding member of one of the most thriving students driven community of North East named D4 Community. From helping students, teaching, writing cool blogs to creating content for the world, Sagar is on his way to help folks ace their career in tech."
  },
  {
    id:8,
    image:"../../../assets/volunteers/Mantasha.jpeg",
    name:"Mantasha Tabassum",
    college:"SVIET",
    designation:"Event Lead",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/mantasha-tabassum-0322ab250/",
    instagram: "",
    bio: "Mantasha Tabassum, always brimming with energy and excitement, eager to explore new possibilities and take on challenges. She is currently working as a full stack developer and graphic designer. She is an Event and Branding lead of GDSC SVIET. She maintains a relaxed and balanced approach and finds peace and tranquility in nature."
  },
  {
    id:9,
    image:"../../../assets/volunteers/Priyanshi.jpg",
    name:"Priyanshi Sharma",
    college:"SVIET",
    designation:"Graphics Designer",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/priyanshi-sharma-aa6391239",
    instagram: "",
    bio: "I am a passionate student, specializing in graphic design and MERN Stack development. With a creative flair and technical expertise, I strive to merge art and technology to create captivating digital experiences."
  },
  {
    id:10,
    image:"../../../assets/volunteers/Himanshu Verma.jpg",
    name:"Himanshu Verma",
    college:"Chitkara University",
    designation:"Video Editor",
    profile:"",
    twitter:"",
    linkedin: "https://www.linkedin.com/in/himanshu-verma-570465278/",
    instagram: "",
    bio: "Hello there! I'm Himanshu, and I'm a passionate video editor. With over an year of experience in the field, I've honed my skills to bring visuals to life and Bringing creativity and technical expertise to every frame via creating engaging stories through the power of video."
  },
  {
    id:11,
    image:"../../../assets/volunteers/Yashika.jpeg",
    name:"Yashika",
    college:"Chitkara University",
    designation:"Core Team Member @GDSC CUIET",
    profile:"",
    twitter:"https://twitter.com/rainbowinordeal",
    linkedin: "https://www.linkedin.com/in/yashika-mukhija-37a48521b/",
    instagram: "",
    bio: "Yashika, a UX designer who loves to weave storytelling and creativity into exceptional digital experiences that are both visually appealing and user-friendly. She is a Core Team Member of GDSC CUIET. Beyond pixels and prototyping, she loves to do video editing and journaling."
  },
  {
    id:12,
    image:"../../../assets/volunteers/Gaurav.jpg",
    name:"Gaurav Kumar Biswas",
    college:"CGC Jhanjeri",
    designation:"Flutter Developer",
    profile:"",
    twitter:"https://twitter.com/GauravB50930591",
    linkedin: "www.linkedin.com/in/gaurav-kumar-biswas-37106a1b7",
    instagram: "",
    bio: "Software Engineer in training with a passion for esports. I have experience in developing application using Flutter, Dart, Java as well as I am an experienced GFX / VFX artist basically work for Gaming Industries. I am also eager to learn new things and I am always looking for ways to improve my skills."
  },
  {
    id:13,
    image:"../../../assets/volunteers/Aman.jpg",
    name:"Aman Sharma",
    college:"Chitkara University ",
    designation:"MBA",
    profile:"",
    twitter:"https://twitter.com/AmanRarely?t=DcS9dNWxHXgTA3RO5sH-TA&s=08 ",
    linkedin: "https://www.linkedin.com/in/aman-sharma-7782501b6",
    instagram: "",
    bio: "Hello, I'm Aman Sharma, a passionate first-year MBA student with a keen interest in all things Google. I'm fascinated by the ever-evolving world of online marketing and am dedicated to unraveling the intricacies of digital promotion. In addition to my academic pursuits, I'm an enthusiastic content creator, using photography and engaging content to convey powerful messages to the world. Join me on this exciting journey as we explore the intersection of technology, marketing, and creative expression."
  },
  {
    id:14,
    image:"../../../assets/volunteers/Gurkirat Singh.png",
    name:"Gurkirat Singh",
    college:"LKC TC",
    designation:"Video Editor",
    profile:"",
    twitter:"https://twitter.com/GurkiratM1450?t=jh15cddd3hvBdHWIVwPYJg&s=08",
    linkedin: "https://www.linkedin.com/in/gurkirat-singh-b581b6251",
    instagram: "",
    bio: "I am a B.Tech (CSE) 1st Year Student at LKCTC, Jalandhar. I want to be a successful developer in Machine Learning & Robotics in future. I am pretty good at camera operating & editing."
  }
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
  instagram: "",
  bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
},
{
  id:2,
  image:"../../../assets/organizers/Yatin.jpeg",
  name:"Yatin Nayyar",
  company:"Wipro",
  designation:"Project Engineer",
  profile:"",
  twitter:"https://twitter.com/hifiveyatin",
  linkedin: "https://www.linkedin.com/in/hifiveyatin/",
  instagram: "",
  bio: "Yatin is a Project Engineer by profession having 2+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
},
{
  id:3,
  image:"../../../assets/organizers/Loveleen.jpeg",
  name:"Loveleen Kaur",
  company:"Astrotalk",
  designation:"Senior Engineer",
  profile:"",
  twitter:"https://twitter.com/loveleen_nancy",
  linkedin: "https://www.linkedin.com/in/loveleen-kaur/",
  instagram: "",
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
  image:"../../../assets/organizers/Ayush.jpeg",
  name:"Ayush Sharma",
  company:"IBM",
  designation:"Application Developer",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  bio: "Ayush is an Application Developer in IBM. He is Co Lead - Meta Developer Circle (Chandigarh). He is Certified Java & Cloud full stack Developer. He is Core Team Lead (Google Developers Group-Chandigarh)."
},
{
  id:6,
  image:"../../../assets/organizers/Harneet.jpeg",
  name:"Harneet Singh",
  company:"KPMG",
  designation:"Associate Consultant",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  bio: "By profession I'm working as Associate Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere."
}
];



}
