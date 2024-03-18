import {Component, OnInit} from '@angular/core'
import {NavigationEnd, Router, RouterLink} from '@angular/router'
import {GoogleTagManagerService} from 'angular-google-tag-manager'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private gtmService: GoogleTagManagerService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }

}
