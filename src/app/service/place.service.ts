import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

public host=environment.placeurl;

  constructor(private http: HttpClient) { }

  getAllPlace(){
    return this.http.get(this.host+"/listePlace");
 }

  public ajouterplace(host:any , donnee:any){
    return this.http.post(this.host+"/addPlace" ,donnee);
  }


}
