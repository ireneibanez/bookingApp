import { Component, OnInit } from '@angular/core';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { SessionItemComponent } from '../../shared/components/session-item/session-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../shared/services/api-service/api.service';
import { NgIf } from '@angular/common';
import { EventItem } from '../../shared/interfaces/event.interface';
import { Subscription, switchMap } from 'rxjs';

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
  private subscription: any;

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
    this.subscription = this.route.params.pipe(
      switchMap(params => this.apiService.getEventInfo(params['id']))
    ).subscribe(event => {
      this.event = event;
      console.log('event', event);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
