import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartWardrobeUI';
  isCollapsed = false;

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
