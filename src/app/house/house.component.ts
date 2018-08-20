import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  private houseId: number;
  private posts: any;
  public isLogged: boolean;
  public isAvailable: boolean;
  public isAdmin: string;

  constructor(private route: ActivatedRoute, private _http: Http, private _router: Router) { }

  ngOnInit() {
    this.houseId = Number.parseInt(this.route.snapshot.paramMap.get('houseId'));
    this._http.get("http://localhost/Methause/houses/show.php?id=" + this.houseId).subscribe(
      data => {
        this.posts = JSON.parse(data["_body"]).houses;
      }
    );
    
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   
    this.isAdmin = localStorage.getItem('administrator');
    (setTimeout( () => {
    if(this.posts.dostupno > 0){
      this.isAvailable = true;
    } else {
      this.isAvailable = false;
    }}, 200));

    
  }

  public edit() {
    this._router.navigateByUrl('/house/' + this.houseId + '/edit');
  }

  public delete() {

    const data = "id=" + this.houseId;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost/Methause/houses/delete.php', data, { headers: headers }).subscribe((result) => {
      const obj = JSON.parse(result['_body']);
      this._router.navigateByUrl('');
    },
      err => {
        alert(JSON.parse(err._body).error);
      }
    );

  }

  public buy() {


    const data = "id=" + this.houseId + "&dostupno=" + (this.posts.dostupno-1);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    

    this._http.post('http://localhost/Methause/houses/buy.php', data, { headers: headers }).subscribe((result) => {
      const obj = JSON.parse(result['_body']);
      this._router.navigateByUrl('');
      alert("House bought successfuly");
    },
      err => {
        alert(JSON.parse(err._body).error);
      }
    );

  }


}
