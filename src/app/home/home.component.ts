import { Component, OnInit } from '@angular/core';
import { DataServService } from '../services/data-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  itemList=[ ];
  constructor(private dSer:DataServService ) {
    this.itemList = this.dSer.DSitemList;    
  }

  ngOnInit() {

  }

}