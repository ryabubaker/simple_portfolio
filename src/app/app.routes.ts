import { About } from './components/about/about';
import { Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';
import { Portofolio } from './components/portofolio/portofolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home Page' },
  {
    path: 'about',
    component: About,

    title: 'About Page',
  },
  {
    path:'portfolio', component:Portofolio, title:'Portfolio Page'
  },
  {path:'contact', component:Contact, title:'Contact page'},
  { path: '**', component: Notfound, title: 'Not Found' },
];
