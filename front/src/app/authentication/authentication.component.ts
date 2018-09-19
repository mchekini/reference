import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
     this.http.get('http://localhost:9201/isuservalid/check?login=test&password=test').subscribe(data => {
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
