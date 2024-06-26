import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { EventItem } from '../../interfaces/event.interface';
import { CardItem } from '../../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<CardItem[]> {
    return this.http.get<CardItem[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getEventInfo(id: string): Observable<EventItem> {
    return this.http.get<EventItem>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      const bodyError = JSON.parse(error.error);
      console.error(`Backend returned code ${error.status}, body was: ${bodyError}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
