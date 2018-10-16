import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { PanelComponent } from "./panel/panel.component";

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'auth/login', component: LoginComponent }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

