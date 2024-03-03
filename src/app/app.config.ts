import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Provider } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

const tokenInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    //importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(withFetch()),
    //provideHttpClient(),
  ],
};
