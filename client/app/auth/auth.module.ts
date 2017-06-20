import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
