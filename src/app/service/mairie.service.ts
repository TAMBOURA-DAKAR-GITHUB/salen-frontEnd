import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MairieService {

  public host=environment.mairieurl;
  public hostCommune=environment.communeurl;
  public hostmarcher=environment.marcherurl;
  public hostplace = environment.placeurl;
  public hostutilisateur = environment.utilisateururl;
  public hostplaceToUtilisateur= environment.placetoutilisateururl

  constructor( private http : HttpClient) { }

getAllMarie(){
   return this.http.get(this.host+"/listeMairie");
}

getAllCommune(){
  return this.http.get<any>(this.hostCommune+"/listeCommune");
}

public ajoutermairie(host:any , donnee:any){
  return this.http.post(this.host+"/addMairie" ,donnee);
}

public deleteMairie(idMairie:number){
  return this.http.delete(this.host+"/deleteById/"+idMairie);
} 

getMairieByUrl(idMairie:number){
  return this.http.get(this.host+"/listeById/"+idMairie);
}

public UpdateMairie(idMairie:number , donnee:any){
  return this.http.put(this.host+"/updateMairie/"+idMairie , donnee);
} 


// la methode pour recuperer la liste des marchers pour une mairie donnee
getAllMarcherByMairie(idMairie: any){
  return this.http.get<any>(this.hostmarcher+"/listeMarcherById/"+idMairie);
}

// la methode pour recuperer la liste les place pour une marcher donnee
getAllPlaceByMarcher(idMarcher: any){
  return this.http.get<any>(this.hostplace+"/listePlaceByIdMarcher/"+idMarcher);
}

// la methode pour recuperer la liste des utilisateur  pour une mairie donnee
getAllUtilisateurByMairie(idMarcher: any){
  return this.http.get<any>(this.hostutilisateur+"/listeUtilisateurById/"+idMarcher);
}

// la methode pour affecter les places a un utilisateur
public affecterPlaceToUtilisateur(host:any , utilisateur:any, place:any ){
 console.log(utilisateur)
 console.log(place)
  

  return this.http.post(this.hostplaceToUtilisateur+"/placeToUtilisateur" ,{"utilisateur":utilisateur, "places":place});
 
  // faire une boucle pour recuperer les donnees 
  
} 

}
