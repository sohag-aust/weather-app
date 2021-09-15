import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

    constructor() { 
       
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let queryParams = new HttpParams({fromString: request.params.toString()});

        queryParams = queryParams.append('appid', '46ad7457603b9b0104e633e78cd60e16');
        queryParams = queryParams.append('units', 'metric');

        const requestClone = request.clone({
            params: queryParams
        });

        return next.handle(requestClone);
    }
}