import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  public createHouse = new FormGroup({
    naslov: new FormControl(),
    povrsina: new FormControl(),
    brojSoba: new FormControl(),
    brojTerasa: new FormControl(),
    cena: new FormControl(),
    dostupno: new FormControl(),
    slika: new FormControl() 
  });
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('administrator'));
    if (localStorage.getItem('administrator') != "1") {
      this._router.navigateByUrl('');
    }
  }

  public addHouse() {
    const data = 'naslov=' + this.createHouse.value.naslov + '&povrsina=' + this.createHouse.value.povrsina + "&brojSoba=" + this.createHouse.value.brojSoba +
    "&brojTerasa=" + this.createHouse.value.brojTerasa + "&cena=" + this.createHouse.value.cena + "&dostupno="+this.createHouse.value.dostupno + "&slika=" + this.createHouse.value.slika;

  
    const headers = new Headers();
    
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    

    this._http.post('http://localhost/Methause/houses/add.php', data, { headers: headers}).subscribe((result) => {
         const obj = JSON.parse(result['_body']);
        
       location.reload();
       this._router.navigateByUrl('');
       },
        err => {
          alert(JSON.parse(err._body).error);
        }
      );
  }


}
