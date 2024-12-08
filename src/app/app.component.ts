import { Component } from '@angular/core';
import { DataStoreService } from './shared/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paconiaPackaging';

  constructor(public dataStore : DataStoreService){
    
  }
}
