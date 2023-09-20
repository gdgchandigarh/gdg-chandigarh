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
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"A Demo User",
    company:"IBM",
    designation:"Team Lead",
    profile:"",
    twitter:"",
    linkedin: "",
    instagram: "",
    sessions: [
      {
        sessionId: 1,
        sessionTopic: "Demo Session 1",
        sessionDuration: "40 min"
      }
    ],
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:4,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"D Demo Speaker",
    company:"Infosys Limited",
    designation:"Technology Lead",
    profile:"",
    twitter:"",
    linkedin: "",
    instagram: "",
    sessions: [
      {
        sessionId: 1,
        sessionTopic: "Demo Session 1",
        sessionDuration: "40 min"
      }
    ],
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:2,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"B Demo Speaker",
    company:"KPMG",
    designation:"Developer",
    profile:"",
    twitter:"",
    linkedin: "",
    instagram: "",
    sessions: [
      {
        sessionId: 1,
        sessionTopic: "Demo Session 1",
        sessionDuration: "40 min"
      }
    ],
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:3,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"C Demo Speaker",
    company:"Astrotalk",
    designation:"Software Engineer",
    profile:"",
    twitter:"",
    linkedin: "",
    instagram: "",
    sessions: [
      {
        sessionId: 1,
        sessionTopic: "Demo Session 1",
        sessionDuration: "40 min"
      }
    ],
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:5,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"E Demo Speaker",
    company:"Nagarro",
    designation:"Senior Engineer",
    profile:"",
    twitter:"",
    linkedin: "",
    instagram: "",
    sessions: [
      {
        sessionId: 1,
        sessionTopic: "Demo Session 1",
        sessionDuration: "40 min"
      }
    ],
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];


organizers = [
  {
  id:1,
  image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  name:"A Demo User",
  company:"IBM",
  designation:"Team Lead",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  sessions: [
    {
      sessionId: 1,
      sessionTopic: "Demo Session 1",
      sessionDuration: "40 min"
    }
  ],
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
  id:4,
  image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  name:"D Demo Speaker",
  company:"Infosys Limited",
  designation:"Technology Lead",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  sessions: [
    {
      sessionId: 1,
      sessionTopic: "Demo Session 1",
      sessionDuration: "40 min"
    }
  ],
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
  id:2,
  image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  name:"B Demo Speaker",
  company:"KPMG",
  designation:"Developer",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  sessions: [
    {
      sessionId: 1,
      sessionTopic: "Demo Session 1",
      sessionDuration: "40 min"
    }
  ],
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
  id:3,
  image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  name:"C Demo Speaker",
  company:"Astrotalk",
  designation:"Software Engineer",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  sessions: [
    {
      sessionId: 1,
      sessionTopic: "Demo Session 1",
      sessionDuration: "40 min"
    }
  ],
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
  id:5,
  image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  name:"E Demo Speaker",
  company:"Nagarro",
  designation:"Senior Engineer",
  profile:"",
  twitter:"",
  linkedin: "",
  instagram: "",
  sessions: [
    {
      sessionId: 1,
      sessionTopic: "Demo Session 1",
      sessionDuration: "40 min"
    }
  ],
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}
];



}
