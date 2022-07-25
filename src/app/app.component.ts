import { Component, OnInit } from '@angular/core';
import { Payment } from './core/domain/payment/payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;

  constructor(
  ) {
  }

  ngOnInit() {
   this.title = 'PayFriends Project';
  }
}
