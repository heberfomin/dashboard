import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ 
   //     headers: req.headers.set('Access-Control-Allow-Origin','https://ec2.gruposol.com.br') 
        headers: req.headers.set('Access-Control-Allow-Origin','https://ec2.gruposol.com.br')
        //headers: req.headers.set('Access-Control-Allow-Origin','https://ec2.gruposol.com.br,Access-Control-Allow-Headers,Origin,Authorization,Cache-Control,no-cache,Content-Type,application/x-www-form-urlencoded,content-type,multipart/form-data')
    });
    return next.handle(dupReq);
  }
};
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }