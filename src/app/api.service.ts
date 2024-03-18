import {Injectable} from '@angular/core'
import {GoogleTagManagerService} from 'angular-google-tag-manager'
import {NavigationEnd, Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router
    ) {
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
