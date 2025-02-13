import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasaApiKey}`;

  constructor(private http: HttpClient) {}

  getApod(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
