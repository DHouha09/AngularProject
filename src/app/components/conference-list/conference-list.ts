
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchText: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrir Angular 21',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier sur les Signals',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence développement web',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 20,
      nbParticipants: 20
    }
  ];

  get filteredConferences(): Conference[] {
    return this.conferences.filter(conference =>
      conference.title.toLowerCase().includes(
        this.searchText.toLowerCase()
      )
    );
  }

  getRemainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  register(conference: Conference): void {
    if (this.getRemainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }
}
