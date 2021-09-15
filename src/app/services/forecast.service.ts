import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IWeather } from '../model/weather';
import { map, catchError } from 'rxjs/operators';
import { IForecast } from '../model/forecast';
import { AppConfigService } from './AppConfigService';
import { WeatherConfig } from '../model/AppConfigData';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private weatherConfig: WeatherConfig;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { 
    this.weatherConfig = appConfigService.config.weather_api;
  }

  getWeatherData(city: string): Observable<IWeather> {
    const URL = `${this.weatherConfig.url}/weather?q=${city}&appid=${this.weatherConfig.api_key}&units=metric`;
    
    return this.http.get<IWeather>(URL)
                    .pipe(
                      map( ({name, main, weather}) => ({name, main, weather}) ),
                      catchError(this.errorHandler)
                    );
  }

  getForeCastData(city: string): Observable<IForecast> {
    const URL = `${this.weatherConfig.url}/forecast?q=${city}&cnt=${this.weatherConfig.cnt}&appid=${this.weatherConfig.api_key}&units=metric`;
    
    return this.http.get<IForecast>(URL)
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
