import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.scss']
})
export class HouseEditComponent implements OnInit {

  
  public houseEditForm = new FormGroup({
    naslov: new FormControl(),
    povrsina: new FormControl(),
    brojSoba: new FormControl(),
    brojTerasa: new FormControl(),
    cena: new FormControl(),
    dostupno: new FormControl(),
    slika: new FormControl() 
  });
  private posts: any;
  private houseId: number;
  constructor(private _http: Http, private _router: Router, private route: ActivatedRoute) {   }
  

  ngOnInit() {
    if (localStorage.getItem('administrator') == null) {
      this._router.navigateByUrl('');
    }
      this.houseId = Number.parseInt(this.route.snapshot.paramMap.get('houseId'));
      this._http.get("http://localhost/Methause/houses/show.php?id="+this.houseId).subscribe(
        data => {
          this.posts = JSON.parse(data["_body"]).houses;
        }
      );
  }
  public updateHouse() {
    var naslov = "";
    var povrsina = "";
    var brojSoba = "";
    var brojTerasa = "";
    var cena = "";
    var dostupno = "";
    var slika = "";

    if (this.houseEditForm.value.naslov == null) {
      naslov = this.posts.naslov;
    } else {
      naslov = this.houseEditForm.value.naslov;
    }

    if (this.houseEditForm.value.povrsina == null) {
      povrsina = this.posts.povrsina;
    } else {
      povrsina = this.houseEditForm.value.povrsina;
    }

    if (this.houseEditForm.value.brojSoba == null) {
      brojSoba = this.posts.brojSoba;
    } else {
      brojSoba = this.houseEditForm.value.brojSoba;
    }

    if (this.houseEditForm.value.brojTerasa == null) {
      brojTerasa = this.posts.brojTerasa;
    } else {
      brojTerasa = this.houseEditForm.value.brojTerasa;
    }

    if (this.houseEditForm.value.cena == null) {
      cena = this.posts.cena;
    } else {
      cena = this.houseEditForm.value.cena;
    }

    if (this.houseEditForm.value.dostupno == null) {
      dostupno = this.posts.dostupno;
    } else {
      dostupno = this.houseEditForm.value.dostupno;
    }

    if (this.houseEditForm.value.slika == null) {
      slika = this.posts.slika;
    } else {
      slika = this.houseEditForm.value.slika;
    }


    const data = 'naslov=' + naslov + '&povrsina=' + povrsina + "&brojSoba=" + brojSoba +
    "&brojTerasa=" + brojTerasa + "&cena=" + cena + "&dostupno=" + dostupno
    + "&slika=" + slika + "&id="+this.houseId;



    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost/Methause/houses/update.php', data, { headers: headers}).subscribe((result)=> {
         const obj = JSON.parse(result['_body']);
         location.reload();
        this._router.navigateByUrl('house/'+this.houseId);
       },
        err => {
          alert(JSON.parse(err._body).error);
        }
      );
  }

}
