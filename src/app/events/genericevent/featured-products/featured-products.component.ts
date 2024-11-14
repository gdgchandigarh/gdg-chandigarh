import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
featuredTopics = [
  {
    topicName:  `Android`,
    logo: `https://developer.android.com/static/images/android-logo.svg`,
    description: `Modern tools and resources to help you build experiences that people love, faster and easier, across every Android device.`
  },
  {
    topicName:  `Flutter`,
    logo: `../../../../assets/Flutter.png`,
    description: `Flutter is Google's open-source UI framework for building natively compiled apps across mobile, web, and desktop platforms.`
  },
  {
    topicName:  `Firebase`,
    logo: `https://www.gstatic.com/images/branding/product/2x/firebase_64dp.png`,
    description: `Firebase is an app development platform that helps you build and grow apps and games users love. Widely used in mobile, web.`
  },
  {
    topicName:  `Gemini API`,
    logo: `https://developers.google.com/static/focus/images/gemini-icon.png`,
    description: `Gemini, an advanced AI language model, excels in generating human-quality text, translations, and code.`
  },
  {
    topicName:  `MakerSuite`,
    logo: `https://developers.google.com/static/focus/images/makersuite.png`,
    description: `MakerSuite is Google's expertise, enabling data-driven decisions and predictive capabilities in applications and services.`
  },
  {
    topicName:  `Web`,
    logo: `../../../../assets/web-fundamentals-icon192x192.png`,
    description: `Google empowers developers to craft the next-gen web applications, fostering innovation and user-centric experiences.`
  },
  {
    topicName:  `Google Cloud`,
    logo: `https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png`,
    description: `Accelerate app development, enhance decision-making, and connect people globally through Google's cloud computing services.`
  },
  {
    topicName:  `TensorFlow`,
    logo: `https://developers.google.com/static/site-assets/images/products/tensorflow-logo-196.png`,
    description: `Google's comprehensive ML platform simplifies building and deploying machine learning models, efficient AI applications.`
  }
]
}
