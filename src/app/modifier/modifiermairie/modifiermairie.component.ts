import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MairieService } from 'src/app/service/mairie.service';

@Component({
  selector: 'app-modifiermairie',
  templateUrl: './modifiermairie.component.html',
  styleUrls: ['./modifiermairie.component.scss']
})
export class ModifiermairieComponent implements OnInit {

  public listeCommune : any []=[];
  public mairiecourant? : any;

  public url?:number


  constructor(private mairieservice : MairieService, private router: Router , private routeactive: ActivatedRoute) { }

  ngOnInit(): void {

    this.mairieservice.getAllCommune().subscribe(
      data =>{
        this.listeCommune=data;
        console.log(this.listeCommune);
       }
    );

    this.mairieservice.getMairieByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.mairiecourant=data;
      console.log(this.mairiecourant);
     }, error=>{
       console.log(error);
       
     });

  }


  OnmodifierMairie(donnee : any){
    let commune = this.listeCommune.filter(element => element.idCommune == +donnee.commune)[0]
     donnee.commune = commune;
     console.log(donnee);
    this.mairieservice.UpdateMairie(this.routeactive.snapshot.params.id, donnee)
    .subscribe(data =>{
      alert("Mairie Modifier avec succes");
      this.router.navigateByUrl("/mairie");
     }, error=>{
       console.log(error);
       
     });
  }
  }


