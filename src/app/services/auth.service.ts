import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiURL = `${environment.apiUrl}/auth-service/api/v1/auth`;

    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('accessToken');
    }

    login(username: string, password: string): Observable<any> {
        const url = `${this.apiURL}/login`;
        return this.http.post<any>(url, { username, password });
    }

    logout(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    register(username: string, email: string, password: string): Observable<any> {
        const url = `${this.apiURL}/register`;
        return this.http.post<any>(url, { username, email, password });
    }
}
