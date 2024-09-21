import { Component, computed, HostListener, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navigationItems = signal([
    { icon: 'overview', label: 'OVERVIEW', route: '/overview' },
    { icon: 'tryOnMe', label: 'TRY ON', route: '/tryOnMe' },
    { icon: 'products', label: 'PRODUCTS', route: '/products' },
    { icon: 'team', label: 'TEAM', route: '/team' },
    { icon: 'contact', label: 'CONTACT', route: '/contact' },
  ]);

  collapsed = signal(false);
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '300px');
  logoImgSize = computed(() => this.collapsed() ? '60px' : '100px');

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width < 768) {
      this.collapsed.set(true);
    } else {
      this.collapsed.set(false);
    }
  }
}
