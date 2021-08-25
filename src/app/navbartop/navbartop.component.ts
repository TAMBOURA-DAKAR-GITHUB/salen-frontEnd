import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../security/service/connexion.service';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.scss']
})
export class NavbartopComponent implements OnInit {

  constructor(public connexion : ConnexionService) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.connexion.logout();
  }
}
