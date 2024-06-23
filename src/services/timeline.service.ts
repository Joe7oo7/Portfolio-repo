import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  timelineEvents = [
    {
      title: 'Event 1',
      date: new Date(2024, 4, 13), // May 13, 2024
      description: 'Description of Event 1'
    },
    {
      title: 'Event 2',
      date: new Date(2024, 4, 15), // May 15, 2024
      description: 'Description of Event 2'
    },
    // Add more events as needed
  ];

  constructor() { }
}
