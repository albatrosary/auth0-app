import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardService } from './shared/auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [ AuthGuardService ]
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
