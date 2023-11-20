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
      company: "Dynopii",
      designation: "Google Developer Expert in GCP",
      profile: "",
      twitter: "https://twitter.com/xprilion",
      linkedin: "https://www.linkedin.com/in/xprilion/",
      imageHeader: "../../assets/speakers/speaker-headers/Anubhav.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        }
      ],
      bio: "A seasoned developer since the pre-Bootstrap era, Anubhav has extensive experience as a freelancer and AI startup founder. He authored Hands-on Python Deep Learning for Web and Mobile Deep Learning with TensorFlow Lite, ML Kit, and Flutter. A Google Developer Expert in GCP, he was a co-organizer for TFUG Kolkata and formerly led the team at GDG Cloud Kolkata. Anubhav is often found discussing System Architecture, Machine Learning, and Web technologies."
    },
    {
      id: 3,
      image: "../../../assets/speakers/debasmita-sarkar.png",
      name: "Debasmita Sarkar",
      company: "Peggy",
      designation: "Google Developer Expert in Flutter",
      profile: "",
      twitter: "https://twitter.com/The__Debo",
      linkedin: "https://www.linkedin.com/in/debasmita-sarkar-22296bb2/",
      imageHeader: "../../assets/speakers/speaker-headers/Debosmita.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Harmonizing Widget Creation with SOLID Principles in Flutter",
          sessionDuration: "40 min"
        }
      ],
      bio: "Debasmita works as Senior Mobile Developer at Peggy, bringing with her a rich experience of 8 years, predominantly in Mobile App Development. An early adopter of Flutter, she has successfully developed and launched many applications across diverse sectors, with a notable emphasis on FinTech. Beyond her development prowess, Debasmita is keen on sharing knowledge. She has given talks in various platforms such as Flutter Festival, DevFest, and Google I/O Extended. Recognized for her contributions, she is recognized as GDE and continues to craft content that fortifies the Flutter community."
    },
    {
      id: 4,
      image: "../../../assets/speakers/pankaj-rai.png",
      name: "Pankaj Rai",
      company: "Self-employed",
      designation: "GDE Android & Firebase",
      profile: "",
      twitter: "https://twitter.com/raipankaj7",
      linkedin: "https://www.linkedin.com/in/pankajrai16/",
      imageHeader: "../../assets/speakers/speaker-headers/Pankaj.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Supercharge Your Android Apps with Firebase",
          sessionDuration: "40 min"
        }
      ],
      bio: "I love to develop Android apps where I feel it gives me the opportunity to transform ideas into reality. I always look forward to learn new technologies and adding them while making apps that's when I came across Firebase and since then it's adding a flavour to my apps. Learning and sharing are two things that I strongly believe in, that's the reason I wrote articles on medium.com on various topics of Android, Kotlin, and Firebase to spread my knowledge with developers across the world. I spoke at the GDG events and monthly meetups to share knowledge with the developers across the community. I like attending various events, webinars, and digital conferences where it helps me gather new information, interact with the speakers, and get an insight into the product."
    },
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
