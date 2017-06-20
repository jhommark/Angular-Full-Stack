import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    ChartsModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule { }
