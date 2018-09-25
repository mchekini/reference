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
      withCredentials: false,
      setHeaders: {
        'Origin': '*'
      }
    });

    return next.handle(request).
    pipe(
      tap(event => {
        if (event instanceof HttpResponse) {

          console.log(" all looks good");
          // http response status code
          console.log(event.status);
        }
      }, error => {
        // http response status code
        console.log("----response----");
        console.error("status code:");
        console.error(error.status);
        console.error(error.message);
        console.log("--- end of response---");

      })
    );
  }

}
