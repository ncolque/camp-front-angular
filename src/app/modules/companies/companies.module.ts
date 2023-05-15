import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';


@NgModule({
  declarations: [
    ListCompaniesComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
