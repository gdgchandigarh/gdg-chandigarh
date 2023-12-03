import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-speaker',
  templateUrl: './event-speaker.component.html',
  styleUrls: ['./event-speaker.component.css']
})
export class EventSpeakerComponent implements OnInit {

  speakers = [
    {
      id: 1,
      image: "../../../assets/speakers/abirami-sukumaran.png",
      name: "Abirami Sukumaran",
      company: "Google",
      designation: "Developer Advocate",
      twitter: "https://twitter.com/AbiramiSukumara",
      linkedin: "https://www.linkedin.com/in/abiramisukumaran/",
      imageHeader: "../../assets/speakers/speaker-headers/Abirami.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Data to AI with Google Cloud",
          sessionDuration: "45 min"
        }
      ],
      bio: "About 17 years of experience in application development and leadership in the areas of databases, data management and analytics, across industries. Currently as a Developer Advocate in Google specializing in Google Cloud databases and data to AI journey, I focus on developer experience and product excellence while enabling developers, practitioners, startups and customers to learn, build and evolve with Google Cloud. Pursuing Doctorate in Business Administration with specialization in Machine Learning. A certified Yoga instructor / practitioner, blogger, speaker and I enjoy reading & learning to become a licensed private pilot."
    },
    {
      id: 2,
      image: "../../../assets/speakers/anubhav-singh.jpg",
      name: "Anubhav Singh",
      company: "GCP",
      designation: "Google Developer Expert",
      profile: "",
      twitter: "https://twitter.com/xprilion",
      linkedin: "https://www.linkedin.com/in/xprilion/",
      imageHeader: "../../assets/speakers/speaker-headers/Anubhav.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Reimagine What's possible with Generative AI Studio",
          sessionDuration: "45 min"
        }
      ],
      bio: "A seasoned developer since the pre-Bootstrap era, Anubhav has extensive experience as a freelancer and AI startup founder. He authored Hands-on Python Deep Learning for Web and Mobile Deep Learning with TensorFlow Lite, ML Kit, and Flutter. A Google Developer Expert in GCP, he was a co-organizer for TFUG Kolkata and formerly led the team at GDG Cloud Kolkata. Anubhav is often found discussing System Architecture, Machine Learning, and Web technologies."
    },
    {
      id: 3,
      image: "../../../assets/speakers/debasmita-sarkar.png",
      name: "Debasmita Sarkar",
      company: "Flutter",
      designation: "Google Developer Expert",
      profile: "",
      twitter: "https://twitter.com/The__Debo",
      linkedin: "https://www.linkedin.com/in/debasmita-sarkar-22296bb2/",
      imageHeader: "../../assets/speakers/speaker-headers/Debosmita.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Harmonizing Widget Creation with SOLID Principles in Flutter",
          sessionDuration: "30 min"
        }
      ],
      bio: "Debasmita works as Senior Mobile Developer at Peggy, bringing with her a rich experience of 8 years, predominantly in Mobile App Development. An early adopter of Flutter, she has successfully developed and launched many applications across diverse sectors, with a notable emphasis on FinTech. Beyond her development prowess, Debasmita is keen on sharing knowledge. She has given talks in various platforms such as Flutter Festival, DevFest, and Google I/O Extended. Recognized for her contributions, she is recognized as GDE and continues to craft content that fortifies the Flutter community."
    },
    {
      id: 4,
      image: "../../../assets/speakers/pankaj-rai.png",
      name: "Pankaj Rai",
      company: "Android & Firebase",
      designation: "Google Developer Expert",
      profile: "",
      twitter: "https://twitter.com/raipankaj7",
      linkedin: "https://www.linkedin.com/in/pankajrai16/",
      imageHeader: "../../assets/speakers/speaker-headers/Pankaj.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Supercharge Your Android Apps with Firebase",
          sessionDuration: "45 min"
        }
      ],
      bio: "I love to develop Android apps where I feel it gives me the opportunity to transform ideas into reality. I always look forward to learn new technologies and adding them while making apps that's when I came across Firebase and since then it's adding a flavour to my apps. Learning and sharing are two things that I strongly believe in, that's the reason I wrote articles on medium.com on various topics of Android, Kotlin, and Firebase to spread my knowledge with developers across the world. I spoke at the GDG events and monthly meetups to share knowledge with the developers across the community. I like attending various events, webinars, and digital conferences where it helps me gather new information, interact with the speakers, and get an insight into the product."
    },
    {
      id: 5,
      image: "../../../assets/speakers/gaurav.jpeg",
      name: "Gaurav Madaan",
      company: "niwi.ai",
      designation: "Co-Founder",
      profile: "",
      twitter: "https://twitter.com/codestellar",
      linkedin: "https://www.linkedin.com/in/gaurav-niwiai/",
      imageHeader: "../../assets/speakers/speaker-headers/gaurav.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Angular Unleashed: Mastering the Beast of Web Development",
          sessionDuration: "45 min"
        }
      ],
      bio: "With 10+ years of experience, Gaurav is responsible for implementing client software solutions with the highest degree of quality and consistency. He has substantial experience in solving client problems by developing high-performance, maintainable, and reliable solutions and has got the opportunity to develop solutions for the Telecom, Medical, and Insurance industries. He is passionate about learning new technologies and implementing solutions for business problems. Outside of work, He runs a meetup group to be able to share his knowledge with the technology professionals and to learn more from them. He is a poet (writes mostly in his native language) and a happy son, husband and father."
    },
    {
      id: 6,
      image: "../../../assets/speakers/nitin.jpeg",
      name: "Nitin Kumar",
      company: "Android",
      designation: "Google Developer Expert",
      profile: "",
      twitter: "https://twitter.com/NitinDroid",
      linkedin: "https://www.linkedin.com/in/nitin-prakash9911/",
      imageHeader: "../../assets/speakers/speaker-headers/Nitin Prakash.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Biometric Auth API",
          sessionDuration: "45 min"
        }
      ],
      bio: "Nitin Prakash is an Android Engineer, currently working with Upswing Fintech, Ex-Trell, Ex-Byjus. Nitin has completed his graduation in Electronics and Communication from Maharishi Dayanand University, Haryana, and live in New Delhi. After completing his graduation Nitin had worked in the telecom industry for more than 2.5 years and but he also learned java and android while doing his telecom job. He got his first break in the IT industry in Dec-2017 where he worked as an individual contributor to the whole android app SDLC and he developed 9 apps successfully. His passion is to develop more robust android apps and learning every day into small pieces. His fun fact, he is very loquacious if anybody talks about android dev."
    },
    {
      id: 7,
      image: "../../../assets/speakers/anuradha.jpg",
      name: "Anuradha",
      company: "Bbetter HR Solutions",
      designation: "CEO and Founder",
      profile: "",
      twitter: "https://twitter.com/coachanuradha",
      linkedin: "https://www.linkedin.com/in/performancecoachanuradha/",
      imageHeader: "../../assets/speakers/speaker-headers/anuradha.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Self Management for Success",
          sessionDuration: "45 min"
        }
      ],
      bio: "Anuradha is a Corporate Trainer with 20 yrs of experience in Strategic Leadership development, Human Resources (HR) & Operations. She is a published author and has co authored a book. A certified Life Coach and POSH trainer. She is International speaker and empanelled with NITTTR, Ministry of HRD, Govt. of India, Management Trainer at Centre for IAS and other Competitive exams, Punjab University., Advisory board member of Mittal Institute of Hospitality, Punjab. She is Startup mentor with Teerthanker Mahaveer University, Moradabad. Mentor with Startup Punjab and Startup Accelerator Chamber of Commerce- SACC, India. President of Life skills council, Womens India Chamber of Commerce & Industry- WICCI. Mentor with AGLA Academy, Nigeria."
    }
  ];

  ngOnInit(): void {
    this.speakers.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }


}
