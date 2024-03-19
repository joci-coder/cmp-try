import {ApplicationConfig, importProvidersFrom} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app.routes'
import {GoogleTagManagerModule} from 'angular-google-tag-manager'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(GoogleTagManagerModule.forRoot({
      id: 'GTM-57WL3GJT',
    }))
  ]
}
