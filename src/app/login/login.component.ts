import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLogged: boolean;
  public isAdmin: string;

  public loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });


  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('administrator');
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public login() {
    const data = 'email=' + this.loginForm.value.email + '&password=' + this.loginForm.value.password;
    console.log(data);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost/Methause/users/login.php', data, { headers: headers}).subscribe((result) => {
         const obj = JSON.parse(result['_body']);
         localStorage.setItem('token', obj.token);
         console.log(obj.administrator);
         localStorage.setItem('administrator', obj.administrator);
         location.reload();
         this._router.navigateByUrl('');
         
       },
        err => {
          alert(JSON.parse(err._body).error);
        }
      );
  }
  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('administrator');
    this.isLogged = false;
    this.isAdmin = "0";
    this._router.navigateByUrl('');

  }


}
