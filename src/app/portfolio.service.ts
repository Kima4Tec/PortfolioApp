import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'https://localhost:7184/api/Portfolio';
  constructor(private http: HttpClient) { }

  // Hent alle portfolios
  getPortfolios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Hent en specifik portfolio ved hjælp af ID
  getPortfolio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Opret en ny portfolio
  createPortfolio(portfolio: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, portfolio);
  }

  // Opdater en eksisterende portfolio
  updatePortfolio(id: number, portfolio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, portfolio);
  }

  // Slet en portfolio
  deletePortfolio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
