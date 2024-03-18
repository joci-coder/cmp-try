import {Component, OnInit} from '@angular/core'
import {NavigationEnd, Router, RouterLink} from '@angular/router'
import {GoogleTagManagerService} from 'angular-google-tag-manager'

@Component({
  selector: 'app-subpage2',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subpage2.component.html',
  styleUrl: './subpage2.component.css'
})
export class Subpage2Component implements OnInit {
  constructor(
    private gtmService: GoogleTagManagerService,
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
