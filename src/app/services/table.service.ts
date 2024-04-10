import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    private apiURL = `${environment.apiUrl}/api/v1/tables`;

    constructor(private http: HttpClient) { }

    getAllTables(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiURL}`);
    }

    getTableById(id: number): Observable<any> {
        return this.http.get<any[]>(`${this.apiURL}/${id}`);
    }

    getTablesByStatus(status: string): Observable<any[]> {
        const URL = `${this.apiURL}/status/${status}`;
        return this.http.get<any[]>(URL);
    }
}
