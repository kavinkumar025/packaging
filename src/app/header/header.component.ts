import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../shared/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, public dataStore : DataStoreService){

  }
  userName = 'John Doe'; // Replace with dynamic username retrieval
  activeScreen = 'home'; // Default active screen

  setActiveScreen(screen: string): void {
    this.activeScreen = screen; // Update the active screen dynamically
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    this.dataStore.isUserLoggedIn = false;
  }
}
