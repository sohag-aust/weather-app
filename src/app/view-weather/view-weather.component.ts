import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '../model/weather';
import { WeatherData } from '../model/weatherData';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})
export class ViewWeatherComponent implements OnInit {

  @Input()
  viewWeatherData!: WeatherData;

  // @Input()
  // viewWeatherData: any;

  preview: boolean = false;

  constructor(private _forecastService:ForecastService) { }

  ngOnInit(): void {
  }

  foreCastData: any;

  getForecast(city: string): any {
    this._forecastService.getForeCastData(city)
                          .subscribe(data => {
                            this.foreCastData = data;
                          });
    this.preview = !this.preview;
  }
}
