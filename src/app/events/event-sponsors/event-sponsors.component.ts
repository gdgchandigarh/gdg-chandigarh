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
        "communityUrl": "https://gdsc.community.dev/swami-vivekanand-institute-of-engineering-technology-chandigarh/"
      },
      {
        "communityId": "2",
        "communityName": "Chitkara University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/chitkara-university-chandigarh/"
      },
      {
        "communityId": "3",
        "communityName": "UIET, Panjab University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/university-institute-of-engineering-technology-punjab-university-chandigarh/"
      },
      {
        "communityId": "4",
        "communityName": "Chandigarh University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/chandigarh-university-chandigarh/"
      },
      {
        "communityId": "5",
        "communityName": "COE CGC, Landran",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/chandigarh-group-of-colleges-coe-landran/"
      },
      {
        "communityId": "6",
        "communityName": "Chandigarh Group of Colleges (CEC)",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/chandigarh-group-of-colleges-cec-landran/"
      },
      {
        "communityId": "7",
        "communityName": "Punjab Engineering College, Chandigarh",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/punjab-engineering-college-chandigarh/"
      },
      {
        "communityId": "8",
        "communityName": "Shaheed Bhagat Singh State University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/shaheed-bhagat-singh-state-university-firozpur/"
      },
      {
        "communityId": "9",
        "communityName": "IKG PTU, Jalandhar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/ik-gujral-punjab-technical-university-jalandhar/"
      },
      {
        "communityId": "11",
        "communityName": "DAV Institute of Engineering & Technology",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/dav-institute-of-engineering-technology-jalandhar/"
      },
      {
        "communityId": "12",
        "communityName": "NIT Jalandhar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/"
      },
      {
        "communityId": "13",
        "communityName": "Lovely Professional University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/lovely-professional-university-jalandhar/"
      },
      {
        "communityId": "14",
        "communityName": "Chitkara University, Himachal Pradesh",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/chitkara-university-himachal-pradesh-solan/"
      },
      {
        "communityId": "15",
        "communityName": "IIT Ropar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/indian-institute-of-technology-ropar/"
      },
      {
        "communityId": "16",
        "communityName": "MM (DU)",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/maharishi-markandeshwar-deemed-to-be-university-mullana/"
      },
      {
        "communityId": "17",
        "communityName": "NIT Kurukshetra",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/national-institute-of-technology-nit-kurukshetra/"
      },
      {
        "communityId": "18",
        "communityName": "Guru Nanak Dev University, RC - Jalandhar",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/guru-nanak-dev-university-regional-campus-jalandhar/"
      },
      {
        "communityId": "19",
        "communityName": "NIT Hamirpur",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/national-institute-of-technology-nit-hamirpur/"
      },
      {
        "communityId": "20",
        "communityName": "Guru Nanak Dev University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/guru-nanak-dev-university-amritsar/"
      },
      {
        "communityId": "21",
        "communityName": "SDMCET Dharwad",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/shri-dharmasthala-manjunatheshwara-college-of-engineering-technology-dharwad/"
      },
      {
        "communityId": "21",
        "communityName": "Baba Banda Singh Bahadur Engineering College",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/baba-banda-singh-bahadur-engineering-college-fatehgarh-sahib/"
      },
      {
        "communityId": "23",
        "communityName": "Punjabi University",
        "coummunityImage": "../../../assets/Brand/GDSCLogo.png",
        "communityDescription": "",
        "communityUrl": "https://gdsc.community.dev/punjabi-university-patiala/"
      },
    ],
    "communityPartners": [
      {
        "communityId": "0",
        "communityName": "GDG Cloud Chandigarh",
        "coummunityImage": "../../../assets/Brand/gdgc.jpg",
        "communityDescription": "",
        "communityUrl": "https://gdg.community.dev/gdg-cloud-chandigarh/"
      },
      {
        "communityId": "1",
        "communityName": "TFUG Chandigarh",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/tfug.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.meetup.com/tensorflow-user-group-chandigarh/"
      },
      {
        "communityId": "2",
        "communityName": "D4 Community",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/D4.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/d4community/"
      },
      {
        "communityId": "3",
        "communityName": "Coding Bits",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/codingbits.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/coding-bits/"
      },
      {
        "communityId": "4",
        "communityName": "Papaya Coders",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/papaya.jpg",
        "communityDescription": "",
        "communityUrl": "https://papayacoders.in/"
      },
      {
        "communityId": "5",
        "communityName": "Hack The Mountains",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/Hack.jpg",
        "communityDescription": "",
        "communityUrl": "https://hackthemountain.tech/"
      },
      {
        "communityId": "6",
        "communityName": "Web 3 Punjab",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/w3.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/web3panjab/"
      },
      {
        "communityId": "7",
        "communityName": "CU IEEE",
        "coummunityImage": "../../../assets/Brand/CommunityPartners/ieee.jpg",
        "communityDescription": "",
        "communityUrl": "https://edu.ieee.org/in-cu/"
      },
      {
        "communityId": "8",
        "communityName": "Bizarre Coders",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/bizzare.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/bizarre-coders/"
      },
      {
        "communityId": "9",
        "communityName": "PandoraX",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/pandora.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/pandorax/"
      },
      {
        "communityId": "10",
        "communityName": "Navan",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/navan.jpg",
        "communityDescription": "",
        "communityUrl": "https://navan.ai/"
      },
      {
        "communityId": "11",
        "communityName": "KUG",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/KUG.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.meetup.com/kotlin-chandigarh-user-group/"
      },
      {
        "communityId": "12",
        "communityName": "Alexa's Developers Community",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/alexa.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/alexadevscu/?originalSubdomain=in"
      },
      {
        "communityId": "13",
        "communityName": "Alexa's Developers Community",
        "coummunityImage":"../../../assets/Brand/CommunityPartners/gfg.jpg",
        "communityDescription": "",
        "communityUrl": "https://www.linkedin.com/company/geeksforgeeks-student-chapter-cu/?originalSubdomain=in"
      },
    ],
    "venuePartner": [
      {
        "communityId": "",
        "communityName": "Amity University",
        "coummunityImage": "https://images.collegedunia.com/public/college_data/images/logos/16250594561625031096logo.png",
        "communityDescription": "",
        "communityUrl": "https://amity.edu/WebCampaign/Punjab/default.aspx?WCID=A19052021A&utm_source=paraojhi&utm_medium=GoogleAd3&utm_campaign=PARADIRECT&utm_id=Paraojhi_Solutions_LLP&gad_source=1&gclid=CjwKCAjwnOipBhBQEiwACyGLuq4_Lo91cQxWPTqKtDStlg19vr32O2L5Rx2Nc2OExyr-QlWCU2wo9hoCdHsQAvD_BwE"
      }
    ]
  }
}
