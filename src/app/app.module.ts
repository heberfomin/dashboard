import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './auth/login/login.module';
import { AuthModule } from './auth/auth.module';
import { routing } from './app.routing';
import { AuthGuard } from './auth/guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { InterceptorModule } from './interceptors/interceptor.module';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { ApplicationErrorHandle } from './app.error-handle.service';
import { registerLocaleData, CommonModule } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { PanelModule } from './panel/panel.module';
import { PanelRoutingModule } from './panel/panel.routing';
import { GetDataService } from './services/get-data.service';
import { CommomService } from './services/commom.service';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginModule,
    AuthModule,
    routing,
    BrowserAnimationsModule,
    InterceptorModule,
    PanelModule
  ],
  exports: [
    AuthModule,
    PanelRoutingModule
  ],
  providers: [ 
    AuthGuard, 
    GetDataService,
    CommomService,
    {provide: LOCALE_ID, useValue: 'pt-BR' },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: ApplicationErrorHandle}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
