import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CatsComponent } from './cats.component';

import { AuthGuardLogin } from '../services/auth-guard-login.service';

const routes: Routes = [
  {
    path: '',
    component: CatsComponent,
    data: {
      title: 'Cats'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule {}
