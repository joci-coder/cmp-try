import {Component, OnInit} from '@angular/core'
import {NavigationEnd, Router, RouterLink} from '@angular/router'
import {GoogleTagManagerService} from 'angular-google-tag-manager'

@Component({
  selector: 'app-subpage1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subpage1.component.html',
  styleUrl: './subpage1.component.css'
})
export class Subpage1Component implements OnInit {

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
