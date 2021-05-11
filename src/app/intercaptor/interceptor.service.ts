import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  apiKey = '58b2358110mshecb6e9f9b294737p1b4b04jsn72319311cd2d';
  hostKey = 'covid-19-coronavirus-statistics2.p.rapidapi.com';
  header: HttpHeaders = new HttpHeaders({
    'x-rapidapi-key': this.apiKey,
    'x-rapidapi-host': this.hostKey
  });
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: this.header});
    return next.handle(request);
  }
}
