import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { PanelComponent } from "./panel/panel.component";
import { PanelMainComponent } from "./panel/panel-main/panel-main.component";

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'panel/main', component: PanelMainComponent },
  { path: 'auth/login', component: LoginComponent }
 
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

