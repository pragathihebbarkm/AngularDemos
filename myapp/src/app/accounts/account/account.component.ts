import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  //@Input()
  account:{
    name: string;
    status: string;
  };
  
  //@Input()
 // id:number;

 // constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

}
