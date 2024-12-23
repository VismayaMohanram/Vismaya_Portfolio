import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), // Enables animations in the app
    provideToastr({
      timeOut: 3000, // Toast duration in milliseconds
      positionClass: 'toast-top-right', // Toast position
      preventDuplicates: true, // Prevent duplicate toasts
    }),
  ],
};
