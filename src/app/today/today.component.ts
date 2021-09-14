import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IWeather } from '../model/weather';
import { WeatherData } from '../model/weatherData';
import { ForecastService } from '../services/forecast.service';

// notification service 
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private _forecastService:ForecastService, 
              private _notificationService: NotificationsService
  ) { }

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

                              // success notification poped up
                              this.onSuccessNotification();
                            } ,
                            (error) => {
                              console.log(error);

                              // error notification poped up
                              this.onErrorNotification();
                            }
                          );
                          
    // reset form value
    this.reactiveForm.reset({
      'cityName': '',
    });
  }

  onErrorNotification(): void {
    this.noResultFound = true;

    this._notificationService.error('Error', 'Server Error', {
      position: ['bottom', 'right'],
      timOut: 2000,
      animate: 'fade',
      showProgressBar: true,
      clickToClose: true
    });
  }

  onSuccessNotification(): void {
    this.noResultFound = false;

    this._notificationService.success('<p style="color: white;"><strong>Success</strong></p>', `<p style="color: white;"><strong>Today's weather detects !!</strong></p>`, {
      position: ['bottom', 'right'],
      timOut: 2000,
      animate: 'fade',
      showProgressBar: true,
      clickToClose: true
    });
  }
}
