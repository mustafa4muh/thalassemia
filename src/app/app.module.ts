import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoadInfoComponent } from './load-info/load-info.component';
import { AddAdresComponent } from './add-adres/add-adres.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { FormsModule } from '@angular/forms';
import { DataServService } from './services/data-serv.service';
import { SetTingComponent } from './set-ting/set-ting.component';
import { AboUtComponent } from './abo-ut/abo-ut.component';
import { LogiNComponent } from './logi-n/logi-n.component';
import { UserProfComponent } from './user-prof/user-prof.component';
import { AddAdminComponent } from './add-admin/add-admin.component';

const routes: Routes = [
  { path: '', pathMatch:'full' , component: HomeComponent },
  { path: 'Info/:id', component:LoadInfoComponent  },
  { path: 'Set/:id', component:SetTingComponent  },
  { path: 'user/:id', component:UserProfComponent  },
  { path: 'ADD', component:AddAdresComponent  },
  { path: 'About', component:AboUtComponent  },
  { path: 'LogIn', component:LogiNComponent  },
  { path: 'add_Admin', component:AddAdminComponent  }
];

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFYsr0GqzU6h7QJ6y4bUypBNWmY3evm-g",
    authDomain: "thalassemia-a.firebaseapp.com",
    databaseURL: "https://thalassemia-a.firebaseio.com",
    projectId: "thalassemia-a",
    storageBucket: "thalassemia-a.appspot.com",
    messagingSenderId: "351303520084"
  };
  
  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoadInfoComponent,
    AddAdresComponent,
    SetTingComponent,
    AboUtComponent,
    LogiNComponent,
    UserProfComponent,
    AddAdminComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes),        
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ DataServService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
