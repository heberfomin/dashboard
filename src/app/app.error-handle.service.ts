import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationErrorHandle extends ErrorHandler {
  constructor(private injector: Injector) {
    super();  
   }
  
  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const error = ( typeof errorResponse.error !== 'object' ) ? JSON.parse(errorResponse.error) : errorResponse.error;
      
      if (errorResponse.status === 400 || errorResponse.status === 401 ) {
        this.goToLogin();
      }
    }

    super.handleError(errorResponse);
  }
  goToLogin(): void {
    const router = this.injector.get(Router);
    localStorage.clear;
    router.navigate(['auth/login']);
  }

}
