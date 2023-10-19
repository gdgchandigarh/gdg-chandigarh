import { Component } from '@angular/core';
@Component({
  selector: 'app-event-sponsors',
  templateUrl: './event-sponsors.component.html',
  styleUrls: ['./event-sponsors.component.css']
})
export class EventSponsorsComponent {
  imageUrl = '../../../assets/Brand/GDGCloud.png'
  gdscUrl = '../../../assets/Brand/GDSCLogo.png'
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
        "communityName": "SVIET",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "2",
        "communityName": "Chitkara University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "3",
        "communityName": "UIET, Panjab University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "4",
        "communityName": "Chandigarh University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "5",
        "communityName": "COE CGC, Landran",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "6",
        "communityName": "Chandigarh Group of Colleges (CEC)",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "7",
        "communityName": "Punjab Engineering College, Chandigarh",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "8",
        "communityName": "Shaheed Bhagat Singh State University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "9",
        "communityName": "IKG PTU, Jalandhar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      // {
      //   "communityId": "10",
      //   "communityName": "Chitkara University",
      //   "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
      //   "communityDescription": "",
      //   "communityUrl": ""
      // },
      {
        "communityId": "11",
        "communityName": "DAV Institute of Engineering & Technology",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "12",
        "communityName": "NIT Jalandhar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "13",
        "communityName": "Lovely Professional University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "14",
        "communityName": "Chitkara University, Himachal Pradesh",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "15",
        "communityName": "IIT Ropar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "16",
        "communityName": "MM (DU)",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "17",
        "communityName": "NIT Kurukshetra",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "18",
        "communityName": "Guru Nanak Dev Engineering College",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "19",
        "communityName": "NIT Hamirpur",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "20",
        "communityName": "Guru Nanak Dev University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "20",
        "communityName": "SDMCET Dharwad",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": ""
      },
    ],
    "communityPartners": [
      {
        "communityId": "1",
        "communityName": "TFUG Chandigarh",
        "coummunityImage": "https://secure.meetupstatic.com/photos/event/6/c/7/1/clean_493947761.webp",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "2",
        "communityName": "D4 Community",
        "coummunityImage": "https://media.licdn.com/dms/image/C4D0BAQEo-hXou9aHDg/company-logo_200_200/0/1664104382379?e=1705536000&v=beta&t=xhRvWL1yqCeSSFRGGwCPPBORJgEcTffviMbuj66v8fQ",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "3",
        "communityName": "Coding Bits",
        "coummunityImage": "https://media.licdn.com/dms/image/D4D0BAQETnzX9qxZD4Q/company-logo_200_200/0/1697400395829?e=1705536000&v=beta&t=odl0oMm8pglPqjqNWhv5Nbl8tgy3ETjSyWJ9xCH2nfI",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "4",
        "communityName": "Papaya Coders",
        "coummunityImage": "https://papaya-coders.b-cdn.net/wp-content/uploads/2023/06/papayacoders-logo-e1686920327207.png.webp",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "5",
        "communityName": "Hack The Mountains",
        "coummunityImage": "https://htm-4-images.s3.amazonaws.com/img/HTMLOGHO_%20NEW.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "6",
        "communityName": "Web 3 Punjab",
        "coummunityImage": "https://media.licdn.com/dms/image/C4D0BAQGn5DdkKxY4Fw/company-logo_200_200/0/1669107465566?e=1705536000&v=beta&t=NibqUy8RVVi6cwIqCJRyCu2lRch9vLBxVGMiW5rMfyI",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "7",
        "communityName": "CU IEEE",
        "coummunityImage": "https://edu.ieee.org/in-cu/wp-content/uploads/sites/833/2022/03/cropped-Frame-1-1.png",
        "communityDescription": "",
        "communityUrl": ""
      },
      {
        "communityId": "8",
        "communityName": "Bizarre Coders",
        "coummunityImage": "https://media.licdn.com/dms/image/D4D0BAQG5Mc2hMxJSHA/company-logo_200_200/0/1684650743069?e=1705536000&v=beta&t=Yd0mhNpUsH76LNUxA4rmawYe6M42JfJwbOstzKvl-sc",
        "communityDescription": "",
        "communityUrl": ""
      },
    ],
    "venuePartner": [
      {
        "communityId": "",
        "communityName": "Amity University",
        "coummunityImage": "https://images.collegedunia.com/public/college_data/images/logos/16250594561625031096logo.png",
        "communityDescription": "",
        "communityUrl": ""
      }
    ]
  }
}
