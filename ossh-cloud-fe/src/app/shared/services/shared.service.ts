import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // initialize behavior subjects and subkect
  isLoggedIn = new BehaviorSubject<boolean>(false);

  // initialize observables
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor() {}

  // setters
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
  }

  // variables
  APPLICATIONS_LIST: any[] = [];
}
