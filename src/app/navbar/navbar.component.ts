import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../security/service/connexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public connexion: ConnexionService) { }

  ngOnInit(): void {
  }


}
