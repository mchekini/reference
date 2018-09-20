import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {


  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {}
    });

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(event.status);
          }
        }, error => {
          console.error(error);
          console.error(error.message);

        })
      );
  }

}
