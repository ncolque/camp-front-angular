import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company, CompanyResponse } from '../../interfaces/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companiesSvc: CompanyService) {}

  ngOnInit(): void {
    this.listCompanies();
  }

  listCompanies() {
    return this.companiesSvc
      .getAllCompanies()
      .subscribe((data: CompanyResponse) => {
        this.companies = data.data;
      });
  }
}
