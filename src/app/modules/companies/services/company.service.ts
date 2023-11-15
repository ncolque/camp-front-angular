import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, CompanyResponse } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  /* private API_URL = 'http://127.0.0.1:5001/api/companies'; */
  private API_URL = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) {}

  getCompaniesSvc(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.API_URL}`);
  }

  deleteCompanySvc(id: number): Observable<Company> {
    return this.http.delete<Company>(`${this.API_URL}/${id}`);
  }

  createCompanySvc(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.API_URL}`, company);
  }

  findCompanySvc(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.API_URL}`);
  }

  updateCompanySvc(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.API_URL}/${id}`, company);
  }
}
