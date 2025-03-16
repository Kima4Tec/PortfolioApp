import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'profile', component: ProfilepageComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'admin', component: AdminpageComponent },
];