import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcherService {

  public host= environment.marcherurl;

  constructor(private http: HttpClient) { }

  getAllMarcher(){
    return this.http.get<any>(this.host+"/listeMarcher");
 }

 
}
