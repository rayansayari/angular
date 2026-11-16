import { Component } from '@angular/core';

interface Friend {
  id: number;
  name: string;
  online: boolean;
}

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends: Friend[] = [
    { id: 1, name: 'Ali', online: true },
    { id: 2, name: 'Sarra', online: false },
    { id: 3, name: 'Mohamed', online: true },
  ];

  get onlineCount(): number {
    return this.friends.filter((f) => f.online).length;
  }

  remove(friend: Friend): void {
    this.friends = this.friends.filter((f) => f.id !== friend.id);
  }
}
