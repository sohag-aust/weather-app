import { Component, OnInit } from '@angular/core';
import { IWeather } from '../model/weather';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private _forecastService:ForecastService) { }

  ngOnInit(): void {
  }

  cityName!: string;
  weatherData!: any;
  noResultFound: boolean = false;
  weather!: IWeather;
  
  getData(city: string): void{
    this._forecastService.getWeatherData(city)
                          .subscribe(
                            (data) => {
                              console.log(data);
                              
                              this.weatherData = data
                              this.noResultFound = false;

                              const {name} = data;
                              const {temp} = data.main;
                              const {icon,main} = data.weather[0];

                              this.weather = {
                                name: name,
                                temp: temp,
                                icon: icon,
                                main: main
                              }

                              console.log(this.weather);
                            } ,
                            (error) => {
                              // console.log(error);
                              this.noResultFound = true;
                            }
                          );
  }
}
