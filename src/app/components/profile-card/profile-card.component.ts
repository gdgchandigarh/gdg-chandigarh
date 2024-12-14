import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/models/IPerson.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  @Input() person: IPerson = {
    id: 0,
    image: '',
    name: '',
    company: '',
    designation: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    bio: '',
  };

  @Input() type: string = 'person';
}
