import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   {

  private posts: any[];

  constructor(private _http: Http) {
    this._http.get("http://localhost/Methause/houses/index.php").subscribe(
      data => {
        this.posts = JSON.parse(data["_body"]).houses;
        
      }
    );
  }

}
