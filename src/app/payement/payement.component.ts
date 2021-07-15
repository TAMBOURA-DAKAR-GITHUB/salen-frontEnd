import { Component, OnInit } from '@angular/core';
import { PayementService } from '../service/payement.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  public listeMarchandByUtilisateur : any;
  public listePlaceByMarchand : any;
  public idmarchandAtuel: any;
  public listePayement: any;
  public utilisateurvirtuel= "1"

  idplaceselected : number[]=[];

  constructor(private payementservice: PayementService) { }

  ngOnInit(): void {
    this.payementservice.getAllMarchandByUtilisateur(1)
    .subscribe(data =>{
    // var vsonDonnee= Object.assign({}, data)
    //  console.log(vsonDonnee);
      this.listeMarchandByUtilisateur=data
     // console.log(this.listeMarchandByUtilisateur)
    }, error=>{
      console.log(error);
      
    });
  }


  onListePlaceByMarchand(idMarchand: number){
    //console.log(idMarchand)
    this.idmarchandAtuel= idMarchand;
    this.payementservice.getAllPlaceByMarchand(idMarchand)
    .subscribe(data =>{
      this.listePlaceByMarchand=data
    //  console.log(this.listePlaceByMarchand)
    }, error=>{
      console.log(error);
      
    });
  }
 
  getIdPlaceSelectionner(ev : any, id: number){
    if(ev.target.checked){
      //console.log(id);
      this.idplaceselected.push(id);
    } else {
      this.idplaceselected= this.idplaceselected.filter(m => m!=id);
    }

    //console.log(this.idplaceselected)

  }

  onAddPayement(donnee : any){
    this.payementservice.addPayement(this.payementservice.host+"/addPayement",this.idmarchandAtuel, this.utilisateurvirtuel,  this.idplaceselected ,donnee ).
    subscribe(data =>{
      this.listePayement=data;
     }, error=>{
       console.log(error);
       
     });
   // console.log(donnee.utilisateur);
   // console.log(this.idplaceselected);
    
  }

}
