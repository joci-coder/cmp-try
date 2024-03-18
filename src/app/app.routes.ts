import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {Subpage1Component} from './subpage1/subpage1.component'
import {Subpage2Component} from './subpage2/subpage2.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'subpage1',
    component: Subpage1Component
  },
  {
    path: 'subpage2',
    component: Subpage2Component
  }
];
