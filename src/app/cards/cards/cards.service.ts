import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Card } from './cards.model';

@Injectable({
    providedIn: 'root'
})
export class CardsService {

    private URL: string = 'http://demo4126999.mockable.io/images';

    constructor(private http: HttpClient) {
    }
    public getCards(): Observable<Card[]> {
        return this.http.get<any>(this.URL);
    }

}
