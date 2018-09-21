import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    HttpClientModule

  ],
  exports: [ 
    LoginModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
