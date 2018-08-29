import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-logi-n',
  templateUrl: './logi-n.component.html',
  styleUrls: ['./logi-n.component.css']
})
export class LogiNComponent implements OnInit {
email:'';
password:'';
errorLog:'';
inii=0;

  constructor(private routeR:Router, private aFAuth:AngularFireAuth) { }
  
  login(){
    this.aFAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      document.getElementById("errr").innerText = 'تم تسجيل دخولك';        
      this.routeR.navigateByUrl('/');     
    }).catch((reson)=>{      
    this.errorLog=reson['code'];
    document.getElementById("errr").innerText = this.errorLog;      
    document.getElementById("errr").style.color = 'red';      
    })


  }
  backTo(){
 this.routeR.navigateByUrl('/');
  }
  ngOnInit() {
  }

}
