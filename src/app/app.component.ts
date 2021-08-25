import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from './security/service/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'salen';
  isLoggedin : boolean = false ;

  constructor(public connexion: ConnexionService,
    private router: Router){}

  ngOnInit () {
    let isloggedin: any;
    let loggedUser:any;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
        this.router.navigate(['/login']);
    else
     this.connexion.setLoggedUserFromLocalStorage(loggedUser);
  }
  
}
