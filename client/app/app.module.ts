import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardRole } from './services/auth-guard-role.service';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuardLogin,
    AuthGuardRole
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
