import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-badges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-badges.component.html',
  styleUrl: './event-badges.component.css'
})
export class EventBadgesComponent {
   @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  image: HTMLImageElement | string = '';
  shape: string = 'original';
  downloadbtn: boolean = false;
  banner: HTMLImageElement = new Image();

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.image = '';
    this.shape = 'original';
    this.downloadbtn = false;
    this.banner.src = 'path_to_your_gdgImage';
    this.banner.onload = () => {
      this.draw();
    };
    document.getElementById('download')!.style.visibility = 'hidden';
  }

  upload(e: any): void {
    if (e && e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.draw();
        };
        img.src = event.target!.result as string;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  uploadImage(): void {
    const input = document.querySelector<HTMLInputElement>('input.profile-input');
    input?.click();
    this.downloadbtn = true;
    const downloadBtn = document.getElementById('download');
    if (downloadBtn) {
      downloadBtn.style.visibility = 'visible';
    }
  }

  changeShape(type: string): void {
    this.shape = type;
    this.draw();
  }

  draw(): void {
    if (this.image instanceof HTMLImageElement) {
      switch (this.shape) {
        case 'original': {
          this.canvas.width = this.image.width;
          this.canvas.height = this.image.height;
          this.ctx.drawImage(this.image, 0, 0);
          break;
        }
        default: {
          this.canvas.width = 2500;
          this.canvas.height = 2500;
          const hRatio = this.canvas.width / this.image.width;
          const vRatio = this.canvas.height / this.image.height;
          const ratio = Math.max(hRatio, vRatio);
          const x = (this.canvas.width - this.image.width * ratio) / 2;
          const y = (this.canvas.height - this.image.height * ratio) / 2;
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
      this.ctx.canvas.width = 2500;
      this.ctx.canvas.height = 2500;
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    const height = (this.banner.height / this.banner.width) * this.canvas.width;
    const y = this.canvas.height - height;
    const fontSize = this.canvas.width / 17.2;
    this.ctx.drawImage(
      this.banner,
      0,
      0,
      this.banner.width,
      this.banner.height,
      0,
      y,
      this.canvas.width,
      height
    );
    this.ctx.fillStyle = '#757575';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${fontSize}px Google Sans, sans-serif`;
    if (this.shape === 'circle') {
      this.ctx.globalCompositeOperation = 'destination-in';
      this.ctx.beginPath();
      this.ctx.arc(
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.canvas.height / 2,
        0,
        Math.PI * 2
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  download(): void {
    const a = document.createElement('a');
    const url = this.canvas.toDataURL('image/png;base64');
    a.download = '#DevFestIndia_badge.png';
    a.href = url;
    a.click();
  }

}
