import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  email:string='';
  password:string='';
  sError:string='';
  
  constructor( private ath:AngularFireAuth,private AFS:AngularFirestore) { }


  addAdmin(){
  this.ath.auth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
    document.getElementById('erroor').innerText = 'تم اضافة مستخدم';    
  }).catch((error)=>{
this.sError = error;
document.getElementById('erroor').innerText = this.sError;

  });
  
  }
  

  ngOnInit() {
  }


}
      