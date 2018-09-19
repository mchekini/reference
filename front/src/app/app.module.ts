import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './interceptor';


const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'test', component: AuthenticationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
       {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
     {
         provide: HTTP_INTERCEPTORS,
         useClass: HeaderInterceptor,
         multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
