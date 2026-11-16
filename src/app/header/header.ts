import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Gestion des conférences';
  subtitle = 'Toutes les conférences à venir';
  today = new Date();
}
