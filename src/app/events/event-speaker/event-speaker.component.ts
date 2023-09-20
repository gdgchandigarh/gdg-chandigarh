import { Component } from '@angular/core';

@Component({
  selector: 'app-event-speaker',
  templateUrl: './event-speaker.component.html',
  styleUrls: ['./event-speaker.component.css']
})
export class EventSpeakerComponent {
  speakers = [
    {
    id:1,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"Demo User 1",
    company:"IBM",
    designation:"Team Lead",
    profile:"",
    twitter:"",
  },
  {
    id:2,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"Demo Speaker 2",
    company:"KPMG",
    designation:"Developer",
    profile:"",
    twitter:"",
  },
  {
    id:3,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"Demo Speaker 3",
    company:"Astrotalk",
    designation:"Software Engineer",
    profile:"",
    twitter:"",
  },
  {
    id:4,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"Demo Speaker 4",
    company:"Infosys Limited",
    designation:"Technology Lead",
    profile:"",
    twitter:"",
  },
  {
    id:5,
    image:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name:"Demo Speaker 5",
    company:"Nagarro",
    designation:"Senior Engineer",
    profile:"",
    twitter:"",
  },
];

}
