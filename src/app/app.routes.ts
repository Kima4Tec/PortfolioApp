import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'profile', component: ProfilepageComponent }, // Profilside
    { path: 'contact', component: ContactpageComponent },
];