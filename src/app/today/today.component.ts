import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.reactiveForm = new FormGroup({
      'cityName': new FormControl(null, Validators.required), 
    });
  }

  reactiveForm!: FormGroup;

  weatherData!: any;
  noResultFound: boolean = false;
  weather!: IWeather;
  
  getData(): void{
    const city = this.reactiveForm.value.cityName;
    
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
    
    // reset form value
    this.reactiveForm.reset({
      'cityName': '',
    });
  }
}
