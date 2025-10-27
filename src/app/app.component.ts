import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple_portfolio';
}
