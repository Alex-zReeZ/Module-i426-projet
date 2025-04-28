import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home-page/home.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(HomeComponent, config);

export default bootstrap;
