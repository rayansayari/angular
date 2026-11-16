import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences = signal<Conference[]>([
    { id: 1, title: 'Angular Summit', description: 'Les nouveautés d’Angular 21',
      date: new Date('2026-12-10T09:00'), place: 'Tunis', maxParticipants: 100, nbParticipants: 60 },
    { id: 2, title: 'Cloud Native Day', description: 'Kubernetes et microservices',
      date: new Date('2027-01-20T10:00'), place: 'Sousse', maxParticipants: 50, nbParticipants: 45 },
    { id: 3, title: 'AI Conference', description: 'IA générative en entreprise',
      date: new Date('2027-02-15T14:00'), place: 'Sfax', maxParticipants: 30, nbParticipants: 30 },
    { id: 4, title: 'Web Meetup (passé)', description: 'Édition précédente',
      date: new Date('2026-09-10T18:00'), place: 'Tunis', maxParticipants: 40, nbParticipants: 12 },
  ]);

  search = signal('');

  upcoming = computed(() => {
    const now = new Date();
    const q = this.search().trim().toLowerCase();
    return this.conferences().filter(
      (c) => c.date > now && c.title.toLowerCase().includes(q)
    );
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  buttonClass(c: Conference) {
    const r = this.remaining(c);
    return {
      'btn-green': r >= 10,
      'btn-orange': r > 0 && r < 10,
      'btn-red': r === 0,
    };
  }

  register(c: Conference): void {
    if (this.remaining(c) === 0) return;
    this.conferences.update((list) =>
      list.map((x) => (x.id === c.id ? { ...x, nbParticipants: x.nbParticipants + 1 } : x))
    );
  }
}
