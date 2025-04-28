import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/home-page/home.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
