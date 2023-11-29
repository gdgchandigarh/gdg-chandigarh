import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-event-badges',
  standalone: true,
  imports: [CommonModule],[MatCardModule],
  templateUrl: './event-badges.component.html',
  styleUrl: './event-badges.component.css'
})
export class EventBadgesComponent implements OnInit {
@ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

ctx!: CanvasRenderingContext2D;
  image: any = '';
  shape: string = 'original';

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.image = '';
    this.shape = 'original';

    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.style.visibility = 'hidden';
    }

    const banner = new Image();
    banner.src = '.../../../assets/badge.png';
    banner.onload = () => {
      this.draw();
    };
  }

  uploadImage(): void {
    const inputElement = document.querySelector('input.profile-input') as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.style.visibility = 'visible';
    }
  }

  changeShape(type: string): void {
    this.shape = type;
    this.draw();
  }

  upload(event: any): void {
    if (event && event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.draw();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    if (this.image) {
      switch (this.shape) {
        case 'original': {
          this.canvas.nativeElement.width = this.image.width;
          this.canvas.nativeElement.height = this.image.height;
          this.ctx.drawImage(this.image, 0, 0);
          break;
        }
        default: {
          const size = Math.min(this.image.width, this.image.height);
          this.canvas.nativeElement.width = 1080;
          this.canvas.nativeElement.height = 1080;
          const hRatio = this.canvas.nativeElement.width / this.image.width;
          const vRatio = this.canvas.nativeElement.height / this.image.height;
          const ratio = Math.max(hRatio, vRatio);
          const x = (this.canvas.nativeElement.width - this.image.width * ratio) / 2;
          const y = (this.canvas.nativeElement.height - this.image.height * ratio) / 2;
          this.ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height,
            x,
            y,
            this.image.width * ratio,
            this.image.height * ratio
          );
          break;
        }
      }
    } else {
      this.ctx.canvas.width = 1080;
      this.ctx.canvas.height = 1080;
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }

    // Rest of your drawing logic...
  }

  download(): void {
    const a = document.createElement('a');
    const url = this.canvas.nativeElement.toDataURL('image/png;base64');
    a.download = 'DevFestBhubaneswar.png';
    a.href = url;

    a.click();
  }
}