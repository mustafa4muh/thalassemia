import { Component, OnInit } from '@angular/core';
import { DataServService } from '../services/data-serv.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-load-info',
  templateUrl: './load-info.component.html',
  styleUrls: ['./load-info.component.css']
})
export class LoadInfoComponent implements OnInit {
  i= 0;
  thData={
    key:'',
    imgUrl:'',
    title:'',
    subTitle:'',
    deatils:''
  }
  infList=[];
  constructor(private SData:DataServService,  private route: ActivatedRoute,private locat:Location) { 
    const id = this.route.snapshot.paramMap.get('id');        
    this.infList = this.SData.DSitemList;    
    this.infList.forEach(infoId => {      
      if( infoId['key'] == id){
      this.thData.key = infoId['key'];
      this.thData.imgUrl = infoId['imgUrl'];
      this.thData.title = infoId['title'];
      this.thData.subTitle = infoId['subTitle'];
      this.thData.deatils = infoId['deatils'];
      
//      console.log(infoId);
    }    
    });
    //console.log(this.thData);  
  }
  GoTo(){
    this.locat.back();
      }
  ngOnInit() {
  }

}
