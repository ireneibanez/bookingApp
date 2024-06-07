import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventSelectionDetailComponent } from './event-selection-detail/event-selection-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'event', component: EventSelectionDetailComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
