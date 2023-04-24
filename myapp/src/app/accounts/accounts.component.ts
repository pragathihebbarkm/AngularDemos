import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = [
    {
      name: 'savings account',
      status : 'active'
    },
    {
      name: 'Debit account',
      status: 'active'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
