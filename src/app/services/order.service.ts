import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Status } from '../enums/status.enum';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private apiURL = `${environment.apiUrl}/api/v1/orders`;

    constructor(private http: HttpClient) { }

    getAllOrders(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiURL}`);
    }

    getOrderById(id: number): Observable<any> {
        return this.http.get<any[]>(`${this.apiURL}/${id}`);
    }

    deleteOrderById(id: number) {
        return this.http.delete(`${this.apiURL}/${id}`);
    }

    updateOrderStatus(id: string, status: Status): Observable<any> {
        const URL = `${this.apiURL}/${id}/change-status`;
        return this.http.put<any>(URL, { status });
    }
}
