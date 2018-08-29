import { Component, OnInit } from '@angular/core';
import { DataServService } from '../services/data-serv.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.css']
})
export class UserProfComponent implements OnInit {
  isSign:boolean=false;
  tiAra = [];
  usID:string='';
  email:string='';
  pass:string='';
  constructor( private dSe:DataServService , private alog:AngularFireAuth, public router:Router,  private locat:Location,private afStorage : AngularFireStorage  , public rRouter:Router  ) { 
    this.tiAra = this.dSe.DSitemList;        
    
      this.alog.auth.onAuthStateChanged((user)=>{
  if(user){  
  this.isSign=true;
  this.usID = user.uid;
  this.email = user.email;

  }else{

  }
      })
  
  }

  
  UpdatDat(){        
    this.alog.auth.currentUser.updateEmail(this.email);
    this.alog.auth.currentUser.updatePassword(this.pass);
this.rRouter.navigateByUrl('/');

  }
  reM(){
    this.alog.auth.currentUser.delete();
    // this.AFS.collection('user').snapshotChanges().subscribe((event)=>{
    //   console.log(event);
    //})
  }
  GoTo(){
this.locat.back();
  }
  Removee(){


  
  }
  
  ngOnInit() {
  }

}



