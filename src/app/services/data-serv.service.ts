import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { AngularFireStorage , AngularFireStorageReference } from 'angularfire2/storage';


@Injectable({
  providedIn: 'root'
})

export class DataServService {

  dbList:AngularFireList<any>;
DSitemList=[ ];
ref:AngularFireStorageReference;

  constructor(public db : AngularFireDatabase ,public afStorage:AngularFireStorage) {
    
    //  this.db.database.ref("SuAdr").on( "value",(snapshot)=>{
    //    this.itemList.push(snapshot.val());
    //  } )
    this.dbList = db.list('SuAdr');
  this.dbList.snapshotChanges().subscribe(
    actions=>{
    actions.forEach(
      action=>{
      let y = action.payload.toJSON();        
      y["key"] = action.key;    
      if(y['imgID']!=''){
      this.afStorage.ref(y['imgID']).getDownloadURL().subscribe(
        (url)=>{
        y['imgUrl'] = url;
//        console.log(url);
        
      });      }
   //console.log(this.imgurL)
      this.DSitemList.push(y as ListItem);                
      
    }
    )
  }
  )
//    console.log(this.dbList);
    //console.log(this.itemList);
  }
  Remo(key){
    this.db.list('SuAdr').remove(key);
  }
  ngOnInit() {
  }

   }

export class ListItem{
  key:'';
  title:'';
  subTitle:'';
  deatils:'';
  imgID:'';
  imgUrl:'';  
}