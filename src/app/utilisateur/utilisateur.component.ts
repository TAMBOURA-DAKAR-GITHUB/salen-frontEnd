import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  public listeUtilisateur : any;
  public listePlaceByUtilisateur : any
  public host= environment.utilisateururl;


  constructor(private serviceuser: UtilisateurService) { }

  ngOnInit(): void {  

    this.serviceuser.getAllUtilisateur()
    .subscribe(data =>{
      this.listeUtilisateur=data;
    }, error=>{
      console.log(error);
      
    });
  }


  onDelete(utilisateur : any){

  }

  onUpdate(utilisateur: any){

  }

  ListePlace(utilisateur : any){
    let iduse= utilisateur.idUtilisateur;
    this.serviceuser.getAllPlaceByUtilisateur(iduse)
    .subscribe(data =>{
      this.listePlaceByUtilisateur=data;
      
      console.log(this.listePlaceByUtilisateur)
    }, error=>{
      console.log(error);
      
    });
    
  }

}
