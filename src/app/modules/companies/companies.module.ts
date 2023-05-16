import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { CreateEditCompanyComponent } from './components/create-edit-company/create-edit-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCompaniesComponent,
    CreateEditCompanyComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CompaniesModule { }
