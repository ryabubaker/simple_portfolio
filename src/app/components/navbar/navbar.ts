import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  exampleModal: HTMLElement= document.getElementById('exampleModal') as HTMLElement;
  isScrolled: boolean = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
