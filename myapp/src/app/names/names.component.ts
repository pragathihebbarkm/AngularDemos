import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  names =  ['Sara','Rama','Siya','Diya']

  logs = [];
  showSecret : boolean;

  onShowButtonClick(){
    this.showSecret = !this.showSecret;
    let datetime = new Date;
    this.logs.push("button pushed at: ",datetime.toLocaleTimeString())
  }

  onResetLogs(){
    this.logs=[];
  }
}
