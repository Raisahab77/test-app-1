import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  username: string = '';

  login(username: string): void {
    this.isLoggedIn = true;
    this.username = username;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }
}
