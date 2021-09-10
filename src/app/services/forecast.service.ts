import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private API_KEY: string = '46ad7457603b9b0104e633e78cd60e16';
  private weatherUrl: string = 'https://api.openweathermap.org/data/2.5/';
  private cnt: number = 16;
  
  private URL!: string;

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    this.URL = `${this.weatherUrl}weather?q=${city}&appid=${this.API_KEY}&units=metric`;
    return this.http.get<any>(this.URL);
  }

  getForeCastData(city: string): Observable<any> {
    this.URL = `${this.weatherUrl}forecast?q=${city}&${this.cnt}&appid=${this.API_KEY}&units=metric`;
    return this.http.get<any>(this.URL);
  }
}
