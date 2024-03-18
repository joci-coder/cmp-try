import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-subpage1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subpage1.component.html',
  styleUrl: './subpage1.component.css'
})
export class Subpage1Component {

}
