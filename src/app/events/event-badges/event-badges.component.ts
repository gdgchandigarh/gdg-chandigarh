import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-badges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-badges.component.html',
  styleUrl: './event-badges.component.css'
})
export class EventBadgesComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  image: any = '';
  shape: string = 'original';
  banner: any;
  banner2: any;

  constructor() {
    document.title = 'Badges | DevFest Chandigarh 2024';

    this.banner = new Image();
    this.banner2 = new Image();
    this.banner.src = '../../../assets/badge.png';
    this.banner2.src = '../../../assets/b2.png';
    
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.image = '';
    this.shape = 'original';

    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.style.visibility = 'hidden';
    }

    const banner = new Image();
    const banner2 = new Image();

    banner.src = '../../../assets/badge.png';
    banner2.src = '../../../assets/b2.png';

    banner.onload = () => {
      console.log('loaded111');
      this.draw();
    };
    banner2.onload = () => {
      console.log('loaded2222');
      this.draw();
    };
  }

  loadBanner(): void {
    this.banner.src = '../assets/badge.png'; // Replace with your image path
    this.banner.onload = () => {
      this.draw();
    };
  }

loadBanner2(): void {
  this.banner2 = new Image(); // Initialize banner2 as a new Image
  this.banner2.src = '../assets/b2.png'; // Replace with your image path
  this.banner2.onload = () => {
    this.draw();
  };
}
  upload(event: any): void {
    const input = event.target as HTMLInputElement;
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

draw(): void {
  const canvasWidth = 2500;
  const canvasHeight = 2500;

  // Clear the canvas
  this.canvas.nativeElement.width = canvasWidth;
  this.canvas.nativeElement.height = canvasHeight;

  // Clip the entire canvas to a circle if the shape is 'circle'
  if (this.shape === 'circle') {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(
      this.canvas.nativeElement.width / 2,
      this.canvas.nativeElement.height / 2,
      Math.min(
        this.canvas.nativeElement.width / 2,
        this.canvas.nativeElement.height / 2
      ),
      0,
      Math.PI * 2
    );
    this.ctx.closePath();
    this.ctx.clip();
  }

  if (this.image) {
    // Calculate the aspect ratio of the image and the canvas
    const imageAspectRatio = this.image.width / this.image.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, drawX, drawY;

    // Determine whether to cover based on width or height
    if (imageAspectRatio > canvasAspectRatio) {
      drawWidth = this.image.width * (canvasHeight / this.image.height);
      drawHeight = canvasHeight;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = canvasWidth;
      drawHeight = this.image.height * (canvasWidth / this.image.width);
      drawX = 0;
      drawY = (canvasHeight - drawHeight) / 2;
    }

    // Draw the image to cover the entire canvas while maintaining its aspect ratio
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      drawX,
      drawY,
      drawWidth,
      drawHeight
    );

    // Draw the second banner (this.banner2) under the circular region
    if (this.shape === 'circle') {
      const height = (this.banner2.height / this.banner2.width) * this.canvas.nativeElement.width;
      const y = this.canvas.nativeElement.height - height;

      this.ctx.drawImage(
        this.banner2,
        0,
        0,
        this.banner2.width,
        this.banner2.height,
        0,
        y,
        this.canvas.nativeElement.width,
        height
      );
    }
  } else {
    // Handle the case where there is no image
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw the second banner (this.banner2) under the circular region
    if (this.shape === 'circle') {
      const height = (this.banner2.height / this.banner2.width) * this.canvas.nativeElement.width;
      const y = this.canvas.nativeElement.height - height;

      this.ctx.drawImage(
        this.banner2,
        0,
        0,
        this.banner2.width,
        this.banner2.height,
        0,
        y,
        this.canvas.nativeElement.width,
        height
      );
    }
  }

  const height = (this.banner.height / this.banner.width) * this.canvas.nativeElement.width;
  const y = this.canvas.nativeElement.height - height;
  const fontSize = this.canvas.nativeElement.width / 17.2;

  // Draw the first banner (this.banner) as usual
  if (this.shape !== 'circle') {
    this.ctx.drawImage(
      this.banner,
      0,
      0,
      this.banner.width,
      this.banner.height,
      0,
      y,
      this.canvas.nativeElement.width,
      height
    );
  }

  // Restore the context state to remove clipping
  if (this.shape === 'circle') {
    this.ctx.restore();
  }

  this.ctx.fillStyle = '#757575';
  this.ctx.textAlign = 'center';
  this.ctx.textBaseline = 'middle';
  this.ctx.font = `${fontSize}px Google Sans, sans-serif`;
}



  download(): void {
    const a = document.createElement('a');
    const url = this.canvas.nativeElement.toDataURL('image/png;base64');
    a.download = 'DevFestChandigarh.png';
    a.href = url;

    a.click();
  }
}
