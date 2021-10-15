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
        return this.http.get<AppConfigData>(environment.config)
                        .pipe(
                            tap( (config) => this.appConfigData = config ),
                        )
                        .toPromise();
    }

    get config(): AppConfigData {
        return this.appConfigData;
    }
}
