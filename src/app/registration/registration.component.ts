import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    password1: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }
  
  public register() {
    if ((this.registerForm.value.email != null) || (this.registerForm.value.password != null) || (this.registerForm.value.password1 != null) 
    || (this.registerForm.value.firstName != null) || (this.registerForm.value.lastName != null)) {
      if (this.registerForm.value.password == this.registerForm.value.password1) {

        const data = 'email=' + this.registerForm.value.email + '&firstName=' + this.registerForm.value.firstName + '&lastName=' + this.registerForm.value.lastName
          + '&password=' + this.registerForm.value.password;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this._http.post('http://localhost/Methause/users/registration.php', data, { headers: headers }).subscribe((result) => {
          const obj = JSON.parse(result['_body']);
          this._router.navigateByUrl('');
          alert("Registration successful, you can log in with your data");
        },
          err => {
            alert(JSON.parse(err._body).error);
          }
        );
      }
      else {
        alert("Passwords do not match");
      }
    } else {
      alert("All fields must be filled");
    }
  
  }

}
