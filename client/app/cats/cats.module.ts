import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  imports: [
    CatsRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ CatsComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatsModule { }
