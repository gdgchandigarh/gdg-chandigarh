import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  exports: [ProfileCardComponent],
  declarations: [ProfileCardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
