import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menu = ['Accueil', 'Conférences', 'Mes inscriptions', 'Contact'];
  active = 'Accueil';

  select(item: string): void {
    this.active = item;
  }
}
