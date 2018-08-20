import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean;
  public isAdmin: string;
  
  public loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("token")==null)
    {
      this.isLogged=false;
    }
    else{
      this.isLogged=true;
    }
  }

  
  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('administrator');
    this.isLogged = false;
    location.replace('home');

  }

}
