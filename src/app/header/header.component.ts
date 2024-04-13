import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  getUsername(): string {
    return this.authService.username;
  }

  logout(): void {
    this.authService.logout();
  }

}
