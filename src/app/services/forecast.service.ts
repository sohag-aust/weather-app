import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IWeather } from '../model/weather';
import { map, catchError } from 'rxjs/operators';
import { IForecast } from '../model/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private API_KEY: string = '46ad7457603b9b0104e633e78cd60e16';
  private weatherUrl: string = 'https://api.openweathermap.org/data/2.5/';
  private cnt: number = 16;
  
  private URL!: string;

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<IWeather> {
    this.URL = `${this.weatherUrl}weather?q=${city}&appid=${this.API_KEY}&units=metric`;
    
    return this.http.get<IWeather>(this.URL)
                    .pipe(
                      map( ({name, main, weather}) => ({name, main, weather}) ),
                      catchError(this.errorHandler)
                    );
  }

  getForeCastData(city: string): Observable<IForecast> {
    this.URL = `${this.weatherUrl}forecast?q=${city}&cnt=${this.cnt}&appid=${this.API_KEY}&units=metric`;
    
    return this.http.get<IForecast>(this.URL)
                    .pipe(
                      map( ({list}) => ({list}) ),
                      catchError(this.errorHandler)
                    );
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Error catched !!');
    return throwError(error.message || "server error.");
  }
}
