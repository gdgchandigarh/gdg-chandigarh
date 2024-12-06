import { Component } from '@angular/core';
@Component({
  selector: 'app-event-sponsors',
  templateUrl: './event-sponsors.component.html',
  styleUrls: ['./event-sponsors.component.css']
})
export class EventSponsorsComponent {



  imageUrl = '../../../assets/Brand/GDGCloud.png'
  gdscUrl = '../../../assets/Brand/gdgoncampus.png'

  brochureUrl = 'assets/Brand/DevFestChandigarh2024SponsorshipBrochure.pdf'
  eventSponsors = {
    "ourSponsors": [
      {
        "sponsorId": "",
        "sponsorName": "",
        "sponsorDescription": "",
        "sponsorImage": '../../../assets/Brand/GDGCloud.png',
        "sponsorUrl": ""
      }
    ],
    "eventSponsors": [
      {
        "sponsorCategory": "Platinum",
        "sponsorDetails": [
          {
            "sponsorName": "TechRbm",
            "sponsorUrl": "https://techrbm.com/",
            "sponsorLogo": "../../../assets/Brand/Sponsors/TechRbm.png",
          },
        ]

      },
      {
        "sponsorCategory": "Silver",
        "sponsorDetails": [
          {
            "sponsorName": "Founder and Lighening",
            "sponsorUrl": "https://www.founderandlightning.com/",
            "sponsorLogo": "../../../assets/Brand/Sponsors/FounderandLightening.png",
          },
          {
            "sponsorName": "TechLearns Academy",
            "sponsorUrl": "https://www.techlearnsacademy.com",
            "sponsorLogo": "../../../assets/Brand/Sponsors/TechLearns.png",
          },
          {
            "sponsorName": "Niwi",
            "sponsorUrl": "https://www.niwi.ai/",
            "sponsorLogo": "../../../assets/Brand/Sponsors/niwi.png",
          }
        ],
      }
    ],
    "gdgCommunities": [
      {
        "communityId": "",
        "communityName": "",
        "coummunityImage": '../../../assets/Brand/GDGCloud.png',
        "communityDescription": "",
        "communityUrl": ""
      }
    ],
    "gdscCommunityPartners": [
      {
        "communityId": "1",
        "communityName": "Chandigarh University",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-chandigarh-university-chandigarh-india/"
      },
      {
        "communityId": "2",
        "communityName": "Chitkara University",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-chitkara-university-chandigarh-india/"
      },
      {
        "communityId": "3",
        "communityName": "GNIOT",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-greater-noida-institute-of-technology-greater-noida-india/"
      },
      {
        "communityId": "4",
        "communityName": "IGC",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-indo-global-college-mohali-india/"
      },
      {
        "communityId": "5",
        "communityName": "Maharishi Markandeshwar",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-maharishi-markandeshwar-deemed-to-be-university-mullana-india/"
      },
      {
        "communityId": "6",
        "communityName": "PUSSGRC",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-panjab-university-swami-sarvanand-giri-regional-centre-hoshiarpur-india/"
      },
      {
        "communityId": "7",
        "communityName": "SBSSU",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-shaheed-bhagat-singh-state-university-firozpur-india/"
      },
      {
        "communityId": "8",
        "communityName": "UIET kuk",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-university-institute-of-engineering-and-technology-kurukshetra-university-kurukshetra-india/"
      },
      {
        "communityId": "9",
        "communityName": "UIET Chandigarh",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-university-institute-of-engineering-technology-punjab-university-chandigarh-india/"
      },
      {
        "communityId": "11",
        "communityName": "SVIET",
        "coummunityImage": "../../../assets/Brand/gdgoncampus.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-on-campus-swami-vivekanand-institute-of-engineering-technology-chandigarh-india/"
      },
    ],

    "communityPartners": [
      {
        "communityId": "0",
        "communityName": "TFUG Chandigarh",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/tfug.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.commudle.com/communities/tfug-chandigarh"
      },
      {
        "communityId": "1",
        "communityName": "GDG Jalandhar",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/gdgj.png",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-jalandhar/"
      },
      {
        "communityId": "2",
        "communityName": "GDG Cloud Chandigarh",
        "coummunityImage": "../../../assets/Brand/gdgc.jpg",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-cloud-chandigarh/"
      },
      {
        "communityId": "3",
        "communityName": "D4 Community",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/d4.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/d4community/"
      },
      {
        "communityId": "4",
        "communityName": "TFUG Ghaziabad",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/tfug-logo-horizontal - Vedansh Tripathi.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/tensorflow-user-group-ghaziabad/"
      },
      {
        "communityId": "5",
        "communityName": "DevLearn ",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/hb-1 - Ishan Kumar.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/groups/14374066/"
      },
      {
        "communityId": "6",
        "communityName": "Alexa Developer’s Community ",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/Alexa Logo - Gurnoor Kaur.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/alexadevscu/"
      },
      {
        "communityId": "7",
        "communityName": "Girls in Tech",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/girlsInTech.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/girls-in-tech-community/posts/?feedView=all"
      },
      {
        "communityId": "8",
        "communityName": "Lamit Club",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/Untitled design (5) - Manik.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/lamit-club/"
      },
      {
        "communityId": "9",
        "communityName": "CU IEEE",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/ieeeCU.png",
        "communityDescription": "",
        "communityUrl": "https://edu.ieee.org/in-cu/"
      },
      {
        "communityId": "10",
        "communityName": "Innovation Mission Punjab",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/impunjab.webp",
        "communityDescription": "",
        "communityUrl": "https://www.impunjab.org/"
      },
      {
        "communityId": "11",
        "communityName": "C Square",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/C Square Black - C Square.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/csquare-club/"
      },
      {
        "communityId": "12",
        "communityName": "Ads labs",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/al.jpg",
        "communityDescription": "",
        "communityUrl": "https://adslabs.devxoshakya.xyz/"
      },
      {
        "communityId": "14",
        "communityName": "Campus Community",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/campus community.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "15",
        "communityName": "Spectrum Club ",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/Spectrum Club.jpg",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "16",
        "communityName": "Bugbaar",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/Bug Baar.png",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/bugbaar/"
      },
    ],

    "venuePartner": [
      {
        "communityId": "",
        "communityName": "Chandigarh University",
        "coummunityImage": "https://www.cuidol.in/new-assets/img/cu-logo.png",
        "communityDescription": "",
        "communityUrl": "https://cucet.cuchd.in/"
      }
    ],
    "ticketingPartner": [
      {
        "communityId": "",
        "communityName": "allevents",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/allevents.jpg",
        "communityDescription": "",
        "communityUrl": "https://allevents.in/"
      },

    ],
    "cfsPartner": [
      {
        "communityId": "",
        "communityName": "Sessionize",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/sessionize.jpg",
        "communityDescription": "",
        "communityUrl": "https://sessionize.com/"
      }
    ]

  }

}
