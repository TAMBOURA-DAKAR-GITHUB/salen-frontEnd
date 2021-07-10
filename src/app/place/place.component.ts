import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarcherService } from '../service/marcher.service';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  public listeMarcher : any []=[];
  public listePlace : any;

  constructor( private placeservice :PlaceService , private marcherservice: MarcherService ,
                  private router: Router) { }

  ngOnInit(): void {
    this.getMarcher();
  
    this.placeservice.getAllPlace()
    .subscribe(data =>{
      this.listePlace=data;
      console.log(this.listePlace)
    }, error=>{
      console.log(error);
      
    });
  }



  

  onAddPlace(donnee : any){

    let marcher = this.listeMarcher.filter(element => element.idMarcher == +donnee.marcher)[0]
    donnee.marcher = marcher;
   this.placeservice.ajouterplace(this.placeservice.host+"/addPlace", donnee).
   subscribe(data =>{
    this.ngOnInit();

    }, error=>{
      console.log(error);
      
    });

  }

  async  getMarcher(){    
    this.listeMarcher = await this.marcherservice.getAllMarcher().toPromise();
  }

  onDelete(place : any){

  }

  onUpdate(place : any){

  }

}
