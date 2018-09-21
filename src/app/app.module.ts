import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './auth/login/login.module';
import { AuthModule } from './auth/auth.module';
import { routing } from './app.routing';
import { AuthGuard } from './auth/guards/auth.guard';
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AuthModule,
    routing,
    PanelModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
