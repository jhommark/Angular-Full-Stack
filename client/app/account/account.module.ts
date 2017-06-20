import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    AccountRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ AccountComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { }
