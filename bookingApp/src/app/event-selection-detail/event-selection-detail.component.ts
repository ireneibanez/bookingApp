import { Component, OnInit } from '@angular/core';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { SessionItemComponent } from '../../shared/components/session-item/session-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../shared/services/api-service/api.service';
import { NgIf } from '@angular/common';
import { EventItem } from '../../shared/interfaces/event.interface';

@Component({
  selector: 'app-event-selection-detail',
  standalone: true,
  imports: [ShoppingCartComponent, SessionItemComponent, RouterLink, NgIf],
  templateUrl: './event-selection-detail.component.html',
  styleUrl: './event-selection-detail.component.scss'
})
export class EventSelectionDetailComponent implements OnInit {

  eventId = '';
  event: EventItem;

  constructor( private route: ActivatedRoute, private apiService: ApiService) {
    this.event = {
      event: {
        id: '',
        image: '',
        title: '',
        subtitle: ''
      },
      sessions: []
    };
   }

  ngOnInit(): void {
    this.apiService.getEventInfo('184').subscribe(event => {
      this.event = event;
      console.log('event', event);
    });
    // this.route.params.subscribe(params => {
    //   this.eventId = params['id'];
    //   console.log('params', params);
    // if (this.eventId !== '') {
      // this.apiService.getEventInfo('184'
      // ).subscribe(event => {
      //   this.event = event
      //   console.log('event', event);
      // });
    // }
      // });
  }
}
