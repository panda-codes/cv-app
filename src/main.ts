import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CvComponent } from './app/cv.component';

bootstrapApplication(CvComponent, appConfig)
  .catch((err) => console.error(err));
