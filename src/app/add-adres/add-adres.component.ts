import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-add-adres',
  templateUrl: './add-adres.component.html',
  styleUrls: ['./add-adres.component.css']
})
export class AddAdresComponent implements OnInit {
  
   data= {    
    imgUrl:'',
    title:'',
    subTitle:'',
    deatils:'',
    imgID:''
  }
 

  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
 
  constructor(private afStorage : AngularFireStorage ,private authh:AngularFireAuth ,public db : AngularFireDatabase,public dbFS: AngularFirestore , public rRouter:Router) { }
 
 

  urlLi(event){    
    const id = Math.random().toString(32).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put( event.target.files[0]);  
    this.data.imgID = id ;
  }

  
  
  removeImg(){
    this.afStorage.ref(this.data.imgUrl).delete();        
    this.rRouter.navigateByUrl('/');
  }
  
  saveData(){    
    this.db.database.ref("SuAdr").push(this.data);
    this.rRouter.navigateByUrl('/');
  }
  

  ngOnInit() {  
  }
  
  
}
