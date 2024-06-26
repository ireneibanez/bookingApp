import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../../interfaces/event.interface';
import { DatePipe, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-session-item',
  standalone: true,
  imports: [JsonPipe, DatePipe, NgFor],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.scss'
})
export class SessionItemComponent implements OnInit {
  @Input() event : EventItem | undefined;

  sessionItemsSelected = 0;

  ngOnInit(): void {
    console.log('event en OnInit', this.event);
  }

  removeSessionItemOnShoppingCart(): void {
    if (this.sessionItemsSelected > 0) {
      this.sessionItemsSelected--;
      console.log('Session item removed from shopping cart');
    }
  }

  addSessionItemToShoppingCart(): void {
    this.sessionItemsSelected++;
    console.log('Session item added to shopping cart');
  }
}
