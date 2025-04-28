import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { HikesDetailsComponent } from './hikes-details/hikes-details.component';
import { HikesSearchListComponent } from './hikes-search-list/hikes-search-list.component';
import { ErrorPageComponent } from './error-pages/error-pages.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hikes-details', component: HikesDetailsComponent},
    { path: 'hikes-search-list', component: HikesSearchListComponent},
    { path: 'error', component: ErrorPageComponent},
    { path: '**', redirectTo: 'error' }
];

