import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './security/service/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class NewmairieGuard implements CanActivate {

  constructor(private connexion: ConnexionService , private router: Router ){}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {

      if (this.connexion.isAdmin())
        return true;
        else
        {
          this.router.navigate(['forbidden']);
           return false;
     
        }
      }
}
