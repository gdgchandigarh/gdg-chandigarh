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
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
      name: "A Demo User",
      company: "IBM",
      designation: "Team Lead",
      profile: "",
      twitter: "",
      linkedin: "",
      imageHeader: "../../assets/event-speaker-template.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 2,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 3,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        }
      ],
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 1,
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
      name: "A Demo User",
      company: "IBM",
      designation: "Team Lead",
      profile: "",
      twitter: "",
      linkedin: "",
      imageHeader: "../../assets/event-speaker-template.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 2,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 3,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        }
      ],
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 1,
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
      name: "A Demo User",
      company: "IBM",
      designation: "Team Lead",
      profile: "",
      twitter: "",
      linkedin: "",
      imageHeader: "../../assets/event-speaker-template.jpg",
      instagram: "",
      sessions: [
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 2,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 3,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        },
        {
          sessionId: 1,
          sessionTopic: "Demo Session 1",
          sessionDuration: "40 min"
        }
      ],
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    // {
    //   id:4,
    //   image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    //   name:"D Demo Speaker",
    //   company:"Infosys Limited",
    //   designation:"Technology Lead",
    //   profile:"",
    //   twitter:"",
    //   linkedin: "",
    //   instagram: "",
    //   sessions: [
    //     {
    //       sessionId: 1,
    //       sessionTopic: "Demo Session 1",
    //       sessionDuration: "40 min"
    //     }
    //   ],
    //   bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   id:2,
    //   image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    //   name:"B Demo Speaker",
    //   company:"KPMG",
    //   designation:"Developer",
    //   profile:"",
    //   twitter:"",
    //   linkedin: "",
    //   instagram: "",
    //   sessions: [
    //     {
    //       sessionId: 1,
    //       sessionTopic: "Demo Session 1",
    //       sessionDuration: "40 min"
    //     }
    //   ],
    //   bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   id:3,
    //   image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    //   name:"C Demo Speaker",
    //   company:"Astrotalk",
    //   designation:"Software Engineer",
    //   profile:"",
    //   twitter:"",
    //   linkedin: "",
    //   instagram: "",
    //   sessions: [
    //     {
    //       sessionId: 1,
    //       sessionTopic: "Demo Session 1",
    //       sessionDuration: "40 min"
    //     }
    //   ],
    //   bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   id:5,
    //   image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    //   name:"E Demo Speaker",
    //   company:"Nagarro",
    //   designation:"Senior Engineer",
    //   profile:"",
    //   twitter:"",
    //   linkedin: "",
    //   instagram: "",
    //   sessions: [
    //     {
    //       sessionId: 1,
    //       sessionTopic: "Demo Session 1",
    //       sessionDuration: "40 min"
    //     }
    //   ],
    //   bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // }
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
