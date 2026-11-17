
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  showNotifications: boolean = true;

  notifications: string[] = [
    'Une nouvelle conférence est disponible.',
    'Sami vous a envoyé une invitation.'
  ];

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

}
