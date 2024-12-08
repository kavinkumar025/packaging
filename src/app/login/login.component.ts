import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../shared/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public isForgotPasswordScreen = false;

  constructor(private router: Router,public dataStore: DataStoreService) {

  }

  public forgotPassword() {
    this.isForgotPasswordScreen = true;
  }

  public verifyUser(){
    this.router.navigateByUrl('/home');
    this.router.navigate(['/home']);
    this.dataStore.isUserLoggedIn = true;
  }

}
