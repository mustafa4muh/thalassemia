import { Component, OnInit } from '@angular/core';
import { DataServService } from '../services/data-serv.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isSign:boolean=false;
tiAra = [];
usID:string='';
  constructor( private dSe:DataServService , private alog:AngularFireAuth, public router:Router) { 
    this.tiAra = this.dSe.DSitemList;        
    
      this.alog.auth.onAuthStateChanged((user)=>{
if(user){
  this.isSign=true;
  this.usID = user.uid;
}else{
  
}
      })
  
  }

  LogOut(){
this.alog.auth.signOut();
this.router.navigateByUrl('/');

  }

  ngOnInit() {
  }




}
