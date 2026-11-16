import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { UserProfile } from './user-profile/user-profile';
import { FriendsList } from './friends-list/friends-list';
import { Notifications } from './notifications/notifications';
import { Footer } from './footer/footer';
import { ConferenceList } from './conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, UserProfile, FriendsList, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
