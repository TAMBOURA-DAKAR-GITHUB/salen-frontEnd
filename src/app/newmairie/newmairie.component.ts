import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MairieService } from '../service/mairie.service';

@Component({
  selector: 'app-newmairie',
  templateUrl: './newmairie.component.html',
  styleUrls: ['./newmairie.component.scss']
})
export class NewmairieComponent implements OnInit {


  public listeCommune : any []=[];

  constructor(private http: HttpClient , private route : Router ,private mairieservice:MairieService) { }

  ngOnInit(): void {    
    this.getCommunes()
  }

  onAddMairie(donnee : any){ 
    let commune = this.listeCommune.filter(element => element.idCommune == +donnee.commune)[0]
     donnee.commune = commune;
    this.mairieservice.ajoutermairie(this.mairieservice.host+"/addMairie", donnee).
    subscribe(data =>{
      this.route.navigateByUrl("/mairie");
      //console.log(donnee)
      //console.log(data);

     }, error=>{
       console.log(error);
       
     });
  }

 async  getCommunes(){    
    this.listeCommune = await this.mairieservice.getAllCommune().toPromise();
  }


}
