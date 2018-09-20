import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private http: HttpClient, private router: Router) {
    this.myForm = new FormGroup({
      login: new FormControl('', this.loginValidator),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  login(): void {
   if (this.myForm.valid) {
     const login = this.myForm.get('login').value;
     const password = this.myForm.get('password').value;
     this.http.get('http://localhost:9201/isuservalid/check?login=' + login + '&password=' + password).subscribe((response) => {
       this.router.navigateByUrl('espaceclient');
     },
       (error) => {
       console.log(error.status);
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
