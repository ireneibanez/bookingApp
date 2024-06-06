import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ApiService } from '../../shared/services/api-service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  data: any[] =  [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getEvents().subscribe(
      (data) => {
        console.log('data', data);
        this.data = data
      },
      (error) => console.error(error)
    );
  }

}
