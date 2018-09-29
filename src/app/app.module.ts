import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './auth/login/login.module';
import { AuthModule } from './auth/auth.module';
import { routing } from './app.routing';
import { AuthGuard } from './auth/guards/auth.guard';
import { PanelModule } from './panel/panel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PanelRoutingModule } from './panel/panel.routing';
import { InterceptorModule } from './interceptors/interceptor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AuthModule,
    routing,
    PanelModule,
    PanelRoutingModule,
    BrowserAnimationsModule,
    InterceptorModule
  ],
  exports: [
    AuthModule,
    PanelRoutingModule
  ],
  providers: [ 
    AuthGuard, 
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
