import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private host=environment.utilisateururl;


  constructor(private http : HttpClient) { }

  getAllUtilisateur(){
    return this.http.get(this.host+"/listeUtilisateur");
 }

 // la methode pour recuperer la liste les place pour une marcher donnee
getAllPlaceByUtilisateur(idUtilisateur: any){
  console.log(idUtilisateur);
  return this.http.get<any>(this.host+"/listeByPlaceUtilisateur/"+idUtilisateur);
}

}
