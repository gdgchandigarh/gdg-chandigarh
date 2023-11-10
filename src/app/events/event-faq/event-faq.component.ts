import { Component } from '@angular/core';

@Component({
  selector: 'app-event-faq',
  templateUrl: './event-faq.component.html',
  styleUrls: ['./event-faq.component.css']
})
export class EventFaqComponent {
  faqQuestions = [
    {
      question: `What is DevFest?`,
      answer: `DevFest is an annual distributed tech conference hosted by the Google Developer Groups (GDG) community. GDGs host these events around the globe.

      DevFest 2022 marked the 11th year of DevFest and represents the beginning of the second decade of the GDG community. Through DevFest, you can continue to explore how Google's suite of developer tools can expand the impact of local tech professionals and developers like you around the world.
      
      Whether you're passionate about finding new opportunities, elevating your knowledge on the latest Google developer tools, or exploring how to use Google technologies to generate social and economic impact, DevFest offers an amazing platform for developers to connect locally, learn, and build on Google's tools.`
    },
    {
      question: `What is Google Developer Groups (GDG)?`,
      answer: `<a href="https://developers.google.com/community/gdg">Google Developer Groups (GDG)</a> is the largest developer community in the world. Over 1000+ GDGs exist in 140+ countries around the globe. The program helps developers connect with one another and learn about building products on all Google platforms.

      Each GDG is a local community hub of professional developers who share expertise and passion for Google's developer technology.
      
      GDG communities coordinate community activities centered around helping developers learn, connect, and grow while building a strong sense of belonging to the local and global Google Developer Groups community.`
    },
    {
      question: `When will DevFest 2023 events happen?`,
      answer: `DevFests in 2023 will happen all over the world from October 1 to December 31. 
              We encourage you to <a target="_blank" href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you">find a GDG community </a> 
              hosting a DevFest near you!`
    },
    {
      question: `How can I become a member of Google Developer Group?`,
      answer: `Visit the <a target="_blank" href="https://gdg.community.dev/"> GDG Event Platform </a> or 
                <a target="_blank" href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you">use the map tool </a>
                 to find a Google Developer Group chapter near you. Visit each Google Developer Group's
                 page to find more information about the group, events, and how to join.`
    },
    {
      question: `What is unique about DevFest?`,
      answer: `DevFest is the GDG program's annual globally distributed conference. Different from a meetup or speaker session, DevFests events cover multiple topics and offer a suite of activities that aim to help local developers come together to learn, build and understand the full suite of Google's developer tools.

      DevFest events happen during the second part of the year and offer a way to engage with new content from various Google product teams.`
    },
    {
      question: `What technologies might I use at a DevFest?`,
      answer: `At a DevFest near you, you might learn to do things like discover Android development, 
              optimize experiences with Firebase, build for any screen with Flutter, solve challenges with Google Cloud, 
              explore innovative Machine Learning, tackle problems with TensorFlow, and build web experiences for everyone. 
              These are just some of the tools you might encounter. Find a <a target="_blank" href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you"> 
              DevFest event </a> near you and learn more about other products 
              <a target="_blank" href="https://developers.google.com/community/devfest#devfest-product-garden"> here</a>.`
    },
    {
      question: `How do I become a DevFest speaker?`,
      answer: `Contact a GDG chapter near you to see speaking opportunities.`
    },
    {
      question: `Will events be virtual or in person?`,
      answer: `DevFest events can be in person, online, or hybrid. Find the DevFest events for your region using the map tool. It is up to a GDG to decide what is best for their community.`
    },
    {
      question: `How can I stay informed?`,
      answer: `Seek out your local Google Developer Group, since they organize DevFests. To stay updated, search the Google Developer Group page, follow Google Developer Groups on Twitter, or visit the Google Developers blog.`
    },
    {
      question: `Do I need to register to view the sessions?`,
      answer: `Most DevFest events do require an RSVP. Find DevFest events in your region using the
              <a target="_blank" href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you"> map feature on the home page </a>.`
    },
    {
      question: `If the event is online and available to everyone, why do I need to request an invite or register?`,
      answer: `Registration and attendance numbers help us plan better events. Please RSVP for each event that interests you, and keep in mind that attendance may be limited, especially for in-person events.`
    },
    {
      question: `Will the sessions be in my language?`,
      answer: `DevFest is a distributed global conference featuring events in countries around the world. DevFest sessions will usually be hosted in the regional language, unless otherwise specified.
      <a target="_blank" href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you"> Find an event </a> near you.`
    },
    {
      question: ` Is the Add Ticket refundable?`,
      answer: `No, the Ticket for GDG Chandigarh Devfest 2023 is non-refundable. Once purchased, it cannot be refunded or exchanged. Please ensure that you review your selection before completing the transaction.`
    },
  ]
}
//
