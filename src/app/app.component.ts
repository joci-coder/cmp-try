import {Component, OnInit} from '@angular/core'
import {NavigationEnd, Router, RouterOutlet} from '@angular/router'
import {GoogleTagManagerService} from 'angular-google-tag-manager'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cmp-try';

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
