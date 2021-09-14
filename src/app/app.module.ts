import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my components
import { TodayComponent } from './today/today.component';
import { FutureComponent } from './future/future.component';
import { ViewWeatherComponent } from './view-weather/view-weather.component';

// service added
import { ForecastService } from './services/forecast.service';

// httpClient Module
import { HttpClientModule } from '@angular/common/http';

// FormsModule added for two-way databinding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// adding routes
import { RouterModule, Routes } from '@angular/router';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// pagination
import { NgxPaginationModule } from 'ngx-pagination';

// angular2 notifications
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    FutureComponent,
    ViewWeatherComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
