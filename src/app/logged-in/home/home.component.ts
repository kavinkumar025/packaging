import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userName = 'John Doe'; // Replace this with dynamic user data
  greetingMessage = '';
  timeOfDay = '';

  ngOnInit(): void {
    this.setGreetingMessage();
  }

  setGreetingMessage(): void {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      this.greetingMessage = 'Good Morning';
      this.timeOfDay = 'day';
    } else if (currentHour < 18) {
      this.greetingMessage = 'Good Afternoon';
      this.timeOfDay = 'afternoon';
    } else {
      this.greetingMessage = 'Good Evening';
      this.timeOfDay = 'evening';
    }
  }
}
