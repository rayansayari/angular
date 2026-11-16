import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  user = {
    firstName: 'Ahmed',
    lastName: 'Ben Salah',
    email: 'ahmed@esprit.tn',
  };
  editing = false;

  toggleEdit(): void {
    this.editing = !this.editing;
  }
}