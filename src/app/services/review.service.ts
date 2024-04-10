import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../common/review';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    apiURL = `${environment.apiUrl}/api/v1/reviews`;

    constructor(private httpClient: HttpClient) { }

    getAllReviews(): Observable<Review[]> {
        return this.httpClient.get<Review[]>(this.apiURL);
    }

    getTop6NewReviews(): Observable<Review[]> {
        return this.httpClient.get<Review[]>(`${this.apiURL}/top-6`);
    }
}
