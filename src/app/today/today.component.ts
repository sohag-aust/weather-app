import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IWeather } from '../model/weather';
import { WeatherData } from '../model/weatherData';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private _forecastService:ForecastService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'cityName': new FormControl(null, Validators.required), 
    });
  }

  reactiveForm!: FormGroup;

  weather!: WeatherData;
  noResultFound: boolean = false;
  
  getData(): void{
    const city = this.reactiveForm.value.cityName;
    
    this._forecastService.getWeatherData(city)
                          .subscribe(
                            (data: IWeather) => {
                              console.log('data received : ');
                              console.log(data);

                              const {name} = data;
                              const {temp} = data.main;
                              const {main, icon} = data.weather[0];

                              this.weather = {
                                name,temp,main,icon
                              };

                              this.noResultFound = false;
                            } ,
                            (error) => {
                              console.log(error);
                              this.noResultFound = true;
                            }
                          );
                          
    // reset form value
    this.reactiveForm.reset({
      'cityName': '',
    });
  }
}
