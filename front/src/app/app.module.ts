import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HeaderInterceptor} from './interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EspaceclientComponent } from './espaceclient/espaceclient/espaceclient.component';
import { SafePipe } from './pipes/safe.pipe';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'espaceclient', component: EspaceclientComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/create', component: DashboardComponent},
  {path: 'dashboard/update', component: DashboardComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    EspaceclientComponent,
    SafePipe,
    HeaderComponent,
    CommentsComponent,
    InscriptionComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
