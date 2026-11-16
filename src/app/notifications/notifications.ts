import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Notification {
  id: number;
  message: string;
  date: Date;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  imports: [DatePipe],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications: Notification[] = [
    { id: 1, message: 'Nouvelle conférence : Angular Summit', date: new Date(), read: false },
    { id: 2, message: 'Il reste peu de places pour Cloud Native Day', date: new Date(), read: false },
    { id: 3, message: 'Votre inscription a été confirmée', date: new Date(), read: true },
  ];

  get unreadCount(): number {
    return this.notifications.filter((n) => !n.read).length;
  }

  markAsRead(n: Notification): void {
    n.read = true;
  }

  clearAll(): void {
    this.notifications = [];
  }
}
