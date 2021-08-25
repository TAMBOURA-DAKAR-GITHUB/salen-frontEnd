import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MairieComponent } from './mairie/mairie.component';
import { MarchandMarcheComponent } from './marchand-marche/marchand-marche.component';
import { MarchandComponent } from './marchand/marchand.component';
import { MarcheComponent } from './marche/marche.component';
import { ModifiermairieComponent } from './modifier/modifiermairie/modifiermairie.component';
import { NewmairieGuard } from './newmairie.guard';
import { NewmairieComponent } from './newmairie/newmairie.component';
import { NewmarchandComponent } from './newmarchand/newmarchand.component';
import { NewmarcheComponent } from './newmarche/newmarche.component';
import { NewutilisateurComponent } from './newutilisateur/newutilisateur.component';
import { PayementComponent } from './payement/payement.component';
import { PlaceComponent } from './place/place.component';
import { RecouvreurMarcheComponent } from './recouvreur-marche/recouvreur-marche.component';
import { LoginComponent } from './security/login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [

  {
    path:"mairie", component:MairieComponent
  },
  {
    path:"newmairie", component:NewmairieComponent , canActivate:[NewmairieGuard]
  },
  {
    path:"newmarchand", component:NewmarchandComponent
  },
  {
    path:"marchand", component:MarchandComponent
  },
  {
    path:"newmarche", component:NewmarcheComponent
  },
  {
    path:"marche", component:MarcheComponent
  },
  {
    path:"newutilisateur", component:NewutilisateurComponent
  },
  {
    path:"utilisateur", component:UtilisateurComponent
  },
  {
    path:"recouvreur-marche", component:RecouvreurMarcheComponent
  },
  {
    path:"marchand-marche", component:MarchandMarcheComponent
  },

  {
    path:"modifiermairie/:id", component:ModifiermairieComponent
  },
  {
    path:"place", component:PlaceComponent
  },
  {
    path:"payement", component:PayementComponent  
  },
  {
    path:"", component:AccueilComponent
  },
  {
    path:  'login', component: LoginComponent
  },
  {
    path:  'forbidden', component: ForbiddenComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
