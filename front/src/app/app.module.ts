import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HeaderInterceptor} from './interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EspaceclientComponent } from './espaceclient/espaceclient/espaceclient.component';


const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'espaceclient', component: EspaceclientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    EspaceclientComponent
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
