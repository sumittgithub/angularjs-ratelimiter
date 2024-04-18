// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  service: any; // Declare the service property

  constructor() {
    // Initialize the service property if needed
    this.service = {
      apiName: 'API 1',
      appName: 'App 1',
      uri: '/api/1',
      rateLimitPerformance: '10 requests/min',
      rateLimitProduction: '5 requests/min'
    };
  }
}
