import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyResponse } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private API_URL = 'http://127.0.0.1:5001/api/companies';

  constructor(private http: HttpClient) {}

  getAllCompanies(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.API_URL}`);
  }
}
