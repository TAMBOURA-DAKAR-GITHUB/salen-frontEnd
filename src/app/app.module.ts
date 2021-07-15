import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { GeneralComponent } from './general/general.component';
import { MairieComponent } from './mairie/mairie.component';
import { NewmairieComponent } from './newmairie/newmairie.component';
import { UpdatemairieComponent } from './updatemairie/updatemairie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NewutilisateurComponent } from './newutilisateur/newutilisateur.component';
import { NewmarchandComponent } from './newmarchand/newmarchand.component';
import { MarchandComponent } from './marchand/marchand.component';
import { NewmarcheComponent } from './newmarche/newmarche.component';
import { MarcheComponent } from './marche/marche.component';
import { MarchandMarcheComponent } from './marchand-marche/marchand-marche.component';
import { RecouvreurMarcheComponent } from './recouvreur-marche/recouvreur-marche.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifiermairieComponent } from './modifier/modifiermairie/modifiermairie.component';
import { PlaceComponent } from './place/place.component';
import { PlaceUtilisateurComponent } from './place-utilisateur/place-utilisateur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayementComponent } from './payement/payement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbartopComponent,
    GeneralComponent,
    MairieComponent,
    NewmairieComponent,
    UpdatemairieComponent,
    AccueilComponent,
    UtilisateurComponent,
    NewutilisateurComponent,
    NewmarchandComponent,
    MarchandComponent,
    NewmarcheComponent,
    MarcheComponent,
    MarchandMarcheComponent,
    RecouvreurMarcheComponent,
    ModifiermairieComponent,
    PlaceComponent,
    PlaceUtilisateurComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
