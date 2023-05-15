import { Component, OnInit } from '@angular/core';
import { Company, CompanyResponse } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css'],
})
export class ListCompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companiesSvc: CompanyService) {}

  ngOnInit(): void {
    this.listCompanies();
  }

  listCompanies() {
    return this.companiesSvc
      .getCompaniesSvc()
      .subscribe((data: CompanyResponse) => {
        this.companies = data.data;
      });
  }

  deleteCompany(id: number) {
    return this.companiesSvc.deleteCompanySvc(id).subscribe((resp) => {
      this.listCompanies();
    });
  }
}
