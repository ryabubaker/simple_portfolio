import { Component } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.html',
  styleUrl: './portofolio.css'
})
export class Portofolio {
  info!: Project;
  isModalOpen: boolean = false;
  openModal(project: Project) {
    this.info = project;
    this.isModalOpen = true;
 }
  closeModal() {
    this.isModalOpen = false;
  }

projects:Project[] = [
  {
    name: 'DevFolio',
    url: 'https://ryabubaker.github.io/Devfolio/',
    description: 'Developed a responsive template portfolio showcasing frontend skills',
    image: 'images/image_1.png'
  },
  {
    name: 'Fokir Portfolio',
    url: 'https://ryabubaker.github.io/Fokir/',
    description: 'Developed a modern responsive landing page with dark mode toggle, smooth navigation, and animated UI elements',
    image: 'images/image_2.png'
  },
  {
    name: 'Mealify Restaurant',
    url: 'https://ryabubaker.github.io/Mealify-Template/',
    description: 'Built a responsive restaurant website with a clean UI, smooth navigation, snd animated UI elements',
    image: 'images/image_3.png'
  },
  {
    name: 'Weather App',
    url: 'https://ryabubaker.github.io/weather-app/',
    description: 'Built a responsive weather application that fetches real-time data from a public Weather API and displays forecasts with a clean UI',
    image: 'images/image_4.png'
  },
  {
    name: 'Daniels Portfolio',
    url: 'https://ryabubaker.github.io/Daniels-Portfolio/',
    description: 'Built a responsive portfolio website with a clean UI, smooth navigation, and animated UI elements',
    image: 'images/image_5.png'
  }
];

}
