import { Component, OnInit } from '@angular/core';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { SessionItemComponent } from '../../shared/components/session-item/session-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../shared/services/api-service/api.service';

@Component({
  selector: 'app-event-selection-detail',
  standalone: true,
  imports: [ShoppingCartComponent, SessionItemComponent, RouterLink],
  templateUrl: './event-selection-detail.component.html',
  styleUrl: './event-selection-detail.component.scss'
})
export class EventSelectionDetailComponent implements OnInit {

  eventId = '';

  constructor( private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      if (this.eventId !== '') {
        return this.apiService.getEventInfo(this.eventId);
      } else {
        return null;
      }
    });
  }
}
