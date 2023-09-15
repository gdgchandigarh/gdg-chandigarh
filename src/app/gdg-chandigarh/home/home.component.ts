import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  whatIsImg = './assets/whatIsImg.jpg';
  png = './assets/png.png';
  argi= './assets/argi.png';
  showReadMore = false; // Add a property to control the visibility

  toggleReadMore() {
    this.showReadMore = !this.showReadMore;
  }
}
