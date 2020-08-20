// Defaults Imports
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {ProfileComponent} from './components/profile/profile.component';
import {ErrorComponent} from './components/error/error.component';
import {HomeComponent} from './components/home/home.component';

// Services
import {GuardService} from './services/guard.service';


// Routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  {path: '**', component: ErrorComponent},
];


// Export
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

