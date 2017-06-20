import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardRole } from './services/auth-guard-role.service';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuardLogin],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'cats',
        loadChildren: './cats/cats.module#CatsModule'
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuardRole]
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    data: {
      title: 'Authorization'
    },
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: '404 Not Found'
    },
    children: [
      {
        path: '404',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      }
    ]
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
