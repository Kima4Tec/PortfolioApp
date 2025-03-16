import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'https://localhost:7184/api/Portfolio';
  constructor(private http: HttpClient) { }


  getPortfolios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
