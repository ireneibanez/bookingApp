import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ApiService } from '../../shared/services/api-service/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  cards: any[] =  [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getEvents().subscribe(
      (data) => {
        this.cards = data
      },
      (error) => console.error(error)
    );
  }
  
  

}
