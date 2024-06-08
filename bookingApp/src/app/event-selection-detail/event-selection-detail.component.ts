import { Component, OnInit } from '@angular/core';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { SessionItemComponent } from '../../shared/components/session-item/session-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
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
  // id$: Observable<any>;

  constructor( private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getEventInfo('68').subscribe(data => {
      console.log(data);
    });

    // this.route.params.subscribe(params => {
    //   this.eventId = params['id'];
    // });
    
    // this.id$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     const id = params.get('id');
    //     if (id) {
    //       return this.http.get(`/api/data/${id}`).pipe(
    //         catchError(error => {
    //           console.error('Error occurred while fetching data', error);
    //           return of(null); // Devolvemos un observable con valor `null` en caso de error
    //         })
    //       );
    //     } else {
    //       return of(null); // En caso de que no haya ID, devolvemos un observable con valor `null`
    //     }
    //   })
    // );
  // }
  }

}
