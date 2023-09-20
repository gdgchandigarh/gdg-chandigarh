import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-counter',
  templateUrl: './date-counter.component.html',
  styleUrls: ['./date-counter.component.css']
})
export class DateCounterComponent implements OnInit {
  countdown: { days: number, hours: number, minutes: number, seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  // Set the target date to October 28, 2023, at 10 AM
  targetDate: Date = new Date('2023-10-28T10:00:00');

  ngOnInit() {
    // Update countdown every second
    setInterval(() => {
      this.calculateCountdown();
    }, 1000);
  }

  calculateCountdown() {
    const now = new Date();
    const timeDifference = this.targetDate.getTime() - now.getTime();
    if (timeDifference > 0) {
      this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  }
}
