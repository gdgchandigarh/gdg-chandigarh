import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// devfest-preloader.component.ts
@Component({
  selector: 'app-devfest-preloader', // This should match the tag used in your template
  templateUrl: './devfest-preloader.component.html',
  styleUrls: ['./devfest-preloader.component.css'],
})
export class DevfestPreloaderComponent implements OnInit {
  isLoading: boolean = true;


  ngOnInit(): void {
    // Simulate a delay for demonstration purposes
   
  }
  
}
