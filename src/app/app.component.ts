import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-with-angular';
  navbarOpen = false;

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
