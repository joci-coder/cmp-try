import {ApplicationConfig} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: 'googleTagManagerId', useValue: 'GTM-TSJX6CF4'}]
}
