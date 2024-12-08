import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public isUserLoggedIn = false;

  constructor(public router : Router) { }

  public navigation(path:string){
    // this.router.navigateByUrl(path);
    this.router.navigate([path]);
  }
}
