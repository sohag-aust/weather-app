import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppConfigData } from '../model/AppConfigData';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

    private appConfigData!: AppConfigData;

    constructor(private http: HttpClient) {

    }

    Init() {
        console.log('Init is called');
        return this.http.get<AppConfigData>(environment.config)
                        .pipe(
                            tap( (conf) => this.appConfigData = conf ),
                        )
                        .toPromise();
    }

    get config(): AppConfigData {
        console.log('config method is called !!');
        return this.appConfigData;
    }
}