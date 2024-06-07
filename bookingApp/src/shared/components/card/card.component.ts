import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() card: any = {};

  ngOnInit(): void {
    console.log('card', this.card);
  }

}
