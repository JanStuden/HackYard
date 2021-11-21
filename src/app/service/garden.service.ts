import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Plant{
  _id: number;
  name: string;
  age: string;
  position: string;
  light: string;
}

export class Garden{
  _id: number;
  plantArray: Array<Plant>;
}

@Injectable({
  providedIn: 'root'
})

export class GardenService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  createGarden(): Observable<any> {
    return this.http.post<Garden>('http://localhost:5001/api/create-garden', this.httpOptions)
      .pipe(
        catchError(this.handleError<Garden>('Error occured'))
      );
  }

  addPlant(plant: Plant, gardenId: string): Observable<any> {
    return this.http.post<Plant>('http://localhost:5001/api/create-plant/' + gardenId, plant, this.httpOptions)
      .pipe(
        catchError(this.handleError<Plant>('Error occured'))
      );
  }

  getGarden(id): Observable<Garden> {
    return this.http.get<Garden>('http://localhost:5001/api/fetch-garden-by-id/' + id)
      .pipe(
        tap(_ => console.log(`Garden fetched: ${id}`)),
        catchError(this.handleError<Garden>(`Get garden id=${id}`))
      );
  }

  getPlantRecord(name): Observable<any> {
    return this.http.get<any>('http://localhost:5001/api/fetch-plant-by-name/' + name)
      .pipe(
        tap(_ => console.log(`Garden fetched: ${name}`)),
        catchError(this.handleError<any>(`Get garden id=${name}`))
      );
  }

  getBeeFriendlyPlants(id): Observable<any> {
    return this.http.get<any>('http://localhost:5001/api/bee-friendly-plants/' + id)
      .pipe(
        tap(_ => console.log(`Garden fetched: ${id}`)),
        catchError(this.handleError<any>(`Get garden id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
