import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appoinment } from '../interfaces/appoinments';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {

  private apiURL: string = 'http://localhost:8081/api/controller/appoinments';


  constructor(private httpClient : HttpClient) { }

  searchAppoinments(): Observable<Appoinment[]>{
    return this.httpClient.get<Appoinment[]>(this.apiURL)
    .pipe(
      catchError(error => of([]) )
    );
  }
}
