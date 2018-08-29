import { Component, OnInit } from '@angular/core';
import { DataServService } from '../services/data-serv.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'


@Component({
  selector: 'app-set-ting',
  templateUrl: './set-ting.component.html',
  styleUrls: ['./set-ting.component.css']
})
export class SetTingComponent implements OnInit {
  
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
 
  thDataId:any;
  thDataImgID:any;
  thDataImgUrl:any;
  thData={        
    title:'',
    subTitle:'',
    deatils:''
  }
  infList=[];  
  constructor(private SData:DataServService,  private route: ActivatedRoute,private locat:Location,private afStorage : AngularFireStorage  , public rRouter:Router  ) { 
    const id = this.route.snapshot.paramMap.get('id');        
    this.infList = this.SData.DSitemList;    
    this.infList.forEach(infoId => {      
      if( infoId['key'] == id){      
      this.thDataId = infoId['key'];      
      this.thDataImgID = infoId['imgID'];
      this.thDataImgUrl = infoId['imgUrl'];

      this.thData.title = infoId['title'];
      this.thData.subTitle = infoId['subTitle'];
      this.thData.deatils = infoId['deatils'];
//      console.log(infoId);
    }    
    });
    //console.log(this.thData);  
  }
  urlLi(event){    
    this.afStorage.ref(this.thDataImgID).delete();
    const id = this.thDataImgID;
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put( event.target.files[0]);          
    this.thDataImgID = id;      
  }
  

  UpdatDat(key){        
    key['imgID'] = this.thDataImgID;     
    this.SData.db.database.ref("SuAdr/"+this.thDataId).set(key);                 
this.rRouter.navigateByUrl('/');

  }
  GoTo(){
this.locat.back();
  }
  Removee(key){
  this.SData.Remo(key);  
  this.afStorage.ref(this.thDataImgID).delete();
  this.rRouter.navigateByUrl('');
  
  }
  ngOnInit() {
  }

}