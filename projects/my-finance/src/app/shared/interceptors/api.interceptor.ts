import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

@Injectable()
export default class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const qpiRequest = request.clone({ 
      url: '/api' + request.url 
    });

    return next.handle(qpiRequest);
  }
}