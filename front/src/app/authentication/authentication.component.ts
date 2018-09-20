import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private http: HttpClient) {
    this.myForm = new FormGroup({
      login: new FormControl('', this.loginValidator),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  login(): void {
   if (this.myForm.valid) {
     // let params = new HttpParams();
     // params.set('login', this.myForm.get('login').value);
     // params.set('password', this.myForm.get('password').value);
     // const requestOptions = new RequestOptions();
     // requestOptions.params = params;
     this.http.get('http://localhost:9201/isuservalid/check').subscribe(data => {
       console.log(data);
      console.log('authent réussie');
     })
   }
  }

   loginValidator(control: FormControl): {[s: string]: boolean} {
    const login = control.value;
    console.log(login.length);
    if (login.length < 4) {
      return {LoginValid: true}
    }
    return null;
   }

}
