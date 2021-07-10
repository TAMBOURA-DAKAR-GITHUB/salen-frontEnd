import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MairieService } from '../service/mairie.service';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';



@Component({
  selector: 'app-mairie',
  templateUrl: './mairie.component.html',
  styleUrls: ['./mairie.component.scss']
})
export class MairieComponent implements OnInit {

   public listeMairie : any;
   public listeCommune : any;
   public listeMarcherByMairie : any;
   public listePlaceByMarcher :any;
   public listeUtilisateurByMarcher : any;

   public actuelMairie: number=0

    idplaceselected : number[]=[];

    placeToUtilisateur: any;

  constructor( private mairieservice: MairieService , private http: HttpClient , private router : Router) { }

 

  ngOnInit(): void {

    this.mairieservice.getAllMarie()
    .subscribe(data =>{
      this.listeMairie=data;
      console.log(this.listeMairie)
    }, error=>{
      console.log(error);
      
    });
  
  }  

  onDelete(mairie:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      this.mairieservice.deleteMairie(mairie.idMairie)
      .subscribe(data =>{
       this.ngOnInit();
      }, error=>{
        console.log(error);
        
      });
    }
  }

  onUpdate(mairie:any){
    let id=mairie.idMairie
    this.router.navigateByUrl("modifiermairie/"+ id);
    console.log(btoa(id))

  }

  onListeMarcher(mairie:any){
    this.actuelMairie=mairie.idMairie;
    this.mairieservice.getAllMarcherByMairie(mairie.idMairie)
    .subscribe(data =>{
      this.listeMarcherByMairie=data;
     }, error=>{
       console.log(error);
       
     });
    
  }


  onListePlace(listemarcherbymairie : any){
    this.mairieservice.getAllPlaceByMarcher(listemarcherbymairie.idMarcher)
    .subscribe(data =>{
      this.listePlaceByMarcher=data;
     }, error=>{
       console.log(error);
       
     });

  }

  onListeUtilisateur(){
    this.mairieservice.getAllUtilisateurByMairie(this.actuelMairie)
    .subscribe(data =>{
      this.listeUtilisateurByMarcher=data;
      console.log(this.listeUtilisateurByMarcher);
     }, error=>{
       console.log(error);
       
     });

  }


  getIdPlaceSelectionner(ev : any, id: number){
    if(ev.target.checked){
      console.log(id);
      this.idplaceselected.push(id);
    } else {
      this.idplaceselected= this.idplaceselected.filter(m => m!=id);
    }

    console.log(this.idplaceselected)

  }


  onAddPlaceToUtilisataur(donnee : any){
    this.mairieservice.affecterPlaceToUtilisateur(this.mairieservice.hostplaceToUtilisateur+"/placeToUtilisateur", donnee.utilisateur , this.idplaceselected).
    subscribe(data =>{
      this.placeToUtilisateur=data;
    
      console.log(this.placeToUtilisateur);
     }, error=>{
       console.log(error);
       
     });
   // console.log(donnee.utilisateur);
   // console.log(this.idplaceselected);
    
  }

 

}
