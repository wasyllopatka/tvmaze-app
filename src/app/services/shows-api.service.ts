import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Show, ShowSearchResponseEntry} from '../interfaces/show';
import {APP_CONFIG} from '../config/app-config.token';
import {AppConfig} from '../config/app.config';

@Injectable({providedIn: 'root'})
export class TvmazeShowsApiService {
    constructor(private readonly http: HttpClient, @Inject(APP_CONFIG) private readonly appConfig: AppConfig) {
    }

    showSearch(searchTerm: string): Observable<Array<Show>> {
        return this.http.get<Array<ShowSearchResponseEntry>>(
            `${this.appConfig.baseURL}/search/shows?q=${searchTerm}`
        ).pipe(map(items => items.map(item => item.show)));
    }

    getShowDetails(id: string): Observable<Show> {
        return this.http.get<Show>(`${this.appConfig.baseURL}/shows/${id}`);
    }
}
