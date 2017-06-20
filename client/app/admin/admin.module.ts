import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ AdminComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
