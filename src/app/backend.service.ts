// backend.service.ts en Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'https://demo-backend-cg46.onrender.com/'; // URL del backend Nest.js

  constructor(private http: HttpClient) {}

  getHelloFromBackend() {
    return this.http.get<string>(`${this.apiUrl}/`);
  }
}
